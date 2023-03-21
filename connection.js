var {MongoClient} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

async function connect() {
    const user = process.env.USER;
    const pass = process.env.PASS;
    const connectionString =  process.env.CONSTRING;
    const url = `mongodb+srv://${user}:${pass}@${connectionString}`;
    console.log(url);
    const client = new MongoClient(url);

    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
    
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


exports.connect =  connect;