var MongoClient = require('mongodb').MongoClient;
//create a database called statsdb
var dbname = 'statsdb'
var url = `mongodb://localhost:27017/${dbname}`;

MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function (err, db) {
        // if (err) throw err;
        // console.log(`Database ${dbname} created!`);
        // db.close();

        var dbo = db.db(dbname);
        // dbo.createCollection('uncensus', function (err,res) {
        //     if (err) throw err;
        //     console.log("Collection created!");
        //     db.close();
        // })

//         var stats =[
//     {
//         'city': 'San Juan', 
//         'zip': '00926', 
//         'state': 'PR', 
//         'income': '34781',
//         'age': '44'
//     },
//     {
//         'city': 'Corona', 
//         'zip': '11368', 
//         'state': 'NY', 
//         'income': '50797',
//         'age': '32'
//     },
//     {
//         'city': 'Chicago', 
//         'zip': '60629', 
//         'state': 'IL', 
//         'income': '42019',
//         'age': '31'
//     },
//     {
//         'city': 'El Paso', 
//         'zip': '79936', 
//         'state': 'TX', 
//         'income': '54692',
//         'age': '31'
//     },
//     {
//         'city': 'Los Angeles', 
//         'zip': '90011', 
//         'state': 'CA', 
//         'income': '36954',
//         'age': '28'
//     },
//     {
//         'city': 'Norwalk', 
//         'zip': '90650', 
//         'state': 'CA', 
//         'income': '66453',
//         'age': '35'
//     }
// ]

//     dbo.collection('uncensus').insertMany(stats, function(err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     })

//         var addstats = [
//        {
//       'city': 'Pacoima', 
//        'zip': '91331', 
//         'state': 'CA', 
//        'income': '60360',
//         'age': '33'
//     },
//    {
//        'city': 'Ketchikan', 
//        'zip': '99950', 
//         'state': 'AK', 
//         'income': '00000',
//         'age': '00'
//     }
//         ]
//     dbo.collection('uncensus').insertMany(addstats, function(err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     })

        // var query = { city: "Corona" };
        // dbo.collection("uncensus").find(query).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log (`The zip code of ${query.city} is ${result[0].zip}`);
        //     db.close();
        // })

        // var myquery = { city: /^/ };
        // dbo.collection("uncensus").find(myquery).toArray(function(err, result) {
        //     if (err) throw err;
        //     for (i=0; i<result.length; i++) {
        //         console.log (`The income at ${result[i].city} is ${result[i].income}`)
        //     }
        //     db.close();
        // })

        // var myquery = { state: "AK" };
        // var newvalues = { $set: {income:"38910", age:"46"}};
        // dbo.collection("uncensus").updateOne(myquery, newvalues, function(err, res) {
        //     if (err) throw err;
        //     console.log ("1 document updated");
        // })    

        // var mysort = { city: 1 };
        // dbo.collection("uncensus").find().sort(mysort).toArray(function(err,res) {
        //     if (err) throw err;
        //     console.log(res);
        //     db.close();
        // })

          var mysort = { city: -1 };
        dbo.collection("uncensus").find().sort(mysort).toArray(function(err,res) {
            if (err) throw err;
            console.log(res);
            db.close();
        })
});


