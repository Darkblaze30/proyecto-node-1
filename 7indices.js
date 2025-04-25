import {client, main} from './helpers/db.js'
const db = await main()

try {
    const users = db.collection('users');

    await users.createIndex({firstName: 1},
        {
            name: 'indexFirstName',
            wiredTigerIndexConfig: 4096,
            collation: {locale: 'es', strength: 1}
        }
    );

    await users.createIndex({lastName: 1},
        {
            name: 'indexlastName',
            wiredTigerIndexConfig: 4096,
            collation: {locale: 'es', strength: 1}
        }
    );

    console.log('indices para users creados.')
} catch (error) {
    console.log(error)    
} finally {
    await client.close()
}