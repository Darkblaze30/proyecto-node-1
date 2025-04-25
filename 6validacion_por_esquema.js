import {client, main} from './helpers/db.js'
 
const db = await main();
const users = db.collection('users');

const data = {
    firstName: 'Pedro',
    age: '24',
    gender: '0',
    address: '4th street Suba York',
    email: 'pmartinez.com',
};

try {
    const result = await users.insertOne(data);
    console.log(result)
} catch (error) {
    console.log('El documento tiene datos erroneos');
    console.log(error.errorResponse.errInfo.details.schemaRulesNotSatisfied)    
} finally {
    await client.close()
}