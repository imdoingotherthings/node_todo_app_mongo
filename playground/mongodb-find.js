const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');
    const db = client.db('todoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b47d2635dc46f2f731a264a')
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({
        name: 'userName'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });
    
    db.collection('Users').find({
        name: 'userName'
    }).count().then((count) => {
        console.log(`Count: ${count}`);
    });

    // client.close();
}); 