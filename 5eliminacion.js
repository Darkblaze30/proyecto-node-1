import {client, main} from './helpers/db.js'
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');

const _id = new ObjectId("");
const result = await users.deleteOne({_id});

console.log(result);

await client.close();