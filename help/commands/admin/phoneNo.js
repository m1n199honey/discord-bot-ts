const { SlashCommandBuilder } = require("discord.js");
const twilio = require('twilio');//to send OTP SMS
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();//TO check validity of phNo.

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ph_no")
        .setDescription("Sends an OTP to the user's phone number")
        .addIntegerOption((option) => option
            .setName("number")
            .setDescription("phone No of user")
            .setRequired(true)
            .setMinValue(1000000000)
            .setMaxValue(9999999999)),
    async execute(command, client) {
        const accountSid = 'gfcjcy6t5y6cykif67tdc5s43w3arxucvbjh'; // Your Account SID from www.twilio.com/console
        const authToken = 'awrtc76yuiuf8f6d44x75exs4a32ub9ih9b8'; // Your Auth Token from www.twilio.com/console
        const verifySid = "xtrxyucikugytfr65tvuibunoiuhyyvubh";
        const newUser = twilio(accountSid, authToken);
        const phoneNumber = `+91${command.options.getInteger("number")}`;
        try {
            const parsedPhoneNumber = phoneUtil.parse(phoneNumber); // Replace with your country code
            if (!phoneUtil.isValidNumber(parsedPhoneNumber)) {
                await command.reply('Invalid phone number.');
                return;
            }
        } catch (e) {
            await command.reply('Invalid phone number.');
            return;
        }
        client.verification = await newUser.verify.services(verifySid)
            .verifications.create({ to: phoneNumber, channel: "sms" });

        await command.reply("OTP SMS sent to your phone number!");
    },
};

// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
