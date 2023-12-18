import("./init").then($ => $.default());
require("dotenv").config();  const config = process.env;
// import * as config from "../config.json";
console.log("Config: ", config.TOKEN);