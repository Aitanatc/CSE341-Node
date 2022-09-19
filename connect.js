const {MongoClient} = require('mongodb');
async function main(){
    const dotenv = require("dotenv");
    dotenv.config();
    // const uri = "mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@clusterat.ybkxaou.mongodb.net/?retryWrites=true&w=majority";
    const uri = process.env.DB_CONNECTIONSTRING;
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};