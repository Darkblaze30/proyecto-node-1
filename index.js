import {client, main} from './helpers/db.js'

const db = await main();

const collections = await db.listCollections().toArray();

client.close();

console.log(collections)