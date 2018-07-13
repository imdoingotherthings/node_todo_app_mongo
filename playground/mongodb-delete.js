const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to Mongodb server');
    const db = client.db('todoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'pay bills'
    // }).then((result) => {
    //     console.log(result);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({
    //     name: 'Asai'
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b47f5b2910e6095fafeb2f6')
    });
    // client.close();
}); 