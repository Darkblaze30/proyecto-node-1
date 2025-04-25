import {client,main} from './helpers/db.js';
import { ObjectId } from 'mongodb';

const db = await main();

const users = db.collection('users');

let result = await users.find().toArray();
console.log(result)

const _id = new ObjectId('')
result = await users.findOne({_id});
console.log(result)

const limitResult = await users.find({}).limit(5).toArray()

const skipResult = await users.find({}).skip(5).toArray()

const page = 3;
const pageSize = 2;
const paginatedResult = await users.find({}).skip((page - 1)*pageSize).limit(pageSize).toArray()
console.log(paginatedResult)

await client.close();