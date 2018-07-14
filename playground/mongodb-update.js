const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');
    const db = client.db('todoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b47f458910e6095fafeb299')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b47c1cc9840c45945694b0b')
    }, {
        $set: {
            "name": "Asai",
            "age": 22
        }
    }, {
        returnOriginal: false
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b47c1cc9840c45945694b0b')
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    });

    // client.close();
}); 