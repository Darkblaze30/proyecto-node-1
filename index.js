import {client,main} from './helpers/db.js';

const db = await main();

const users = db.collection('users');

// const data = {
//     firstName:'Ramsey',
//     lastName:"Anderson",
//     age:20,
//     gender:"M",
//     email:'randerson@mail.com'
// }

// const result = await users.insertOne(data);

const data = [{
    firstName:'Isabella',
    lastName:"Rodriguez",
    age:25,
    gender:"F",
    email:'irodriguez@email.co'
},
{
    firstName:'Mateo',
    lastName:"Vargas",
    age:31,
    gender:"M",
    email:'mvargas@domain.net'
},
{
    firstName:'Sofia',
    lastName:"Castro",
    age:19,
    gender:"F",
    email:'scastro@service.org'
},
{
    firstName:'Alejandro',
    lastName:"Lopez",
    age:28,
    gender:"M",
    email:'alopez@provider.com'
}]
const result = await users.insertMany(data);

console.log(result);

await client.close();