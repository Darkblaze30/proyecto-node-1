import {client, main} from './../helpers/db.js';

const db = await main();

await db.createCollection('users', {
    validator: {
        $jsonSchema:{
            bsonType: 'object',
            required: ['firstName', 'lastName', 'age', 'gender', 'email'],
            properties: {
                firstName: {
                    bsonType: 'string'
                },
                lastName: {
                    bsonType: 'string'
                },
                age: {
                    bsonType: 'int',
                    minimum: 18,
                },
                gender: {
                    bsonType: 'string'
                },
                email: {
                    bsonType: 'string'
                },
                hobbies: {
                    bsonType: 'array',
                    description: 'Ingrese uno de estos hobbies Music,Football,Dancing,Hiking,Reading',
                    items: {
                        bsonType: 'string',
                        enum:['Music', 'Football', 'Dancing', 'Hiking', 'Reading'],
                        description: 'Ingrese alguna de las opciones validas' 

                    }
                }
            },
            additionalProperties: false
        }
    }
});

console.log('Esquema de users creado')
await client.close()