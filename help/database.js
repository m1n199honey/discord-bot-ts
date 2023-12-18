const init = {};
module.exports = {
    async connect_to_database(client) {
        try {
            await client.MongoClient.connect();// Connect to the MongoDB cluster
            init.db = client.MongoClient.db('Discord');// Perform database operations using client.db
        } catch (err) {
            console.error(err);
        }
    },
    async addUserId(userId) {
        const userCollection = client.db.collection('users');
        try {
            await userCollection.insertOne({ userId });
            console.log(`User ID ${userId} added to the database`);
        } catch (error) {
            console.error(`Error adding user ID to database: ${error.message}`);
        }
    },
    async disconnect_from_database(client){
        try {
            // Close the connection to the MongoDB cluster
            await client.MongoClient.close();
        }  catch (err) {
            console.error(err);
        } 
    }
}