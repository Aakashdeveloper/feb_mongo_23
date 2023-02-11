// Step to see all databases
* show dbs

// Go Inside Database
* use database name

// See all collections
* show collections

// find data from collection
db.collectionname.find()
db.collectionname.find().pretty() // only for console


// Step to create databases
* use databasename

// step to create collection
db.createCollection("visitors")

db.users.insert({"name":"Rohit"})

// assign collection
var mylocation = db.getCollection('location')
// assign data 
var mylocation1 = db.location.find()
// assign data as array
var mylocation1 = db.location.find().toArray()

var output = []
for(i=0;i<mylocation1.length;i++){
    output.push(mylocation1[i].state)
}

>>>>>>Embeded<<<<<<<
> one to one
{
    _id:ObjectId('34534'),
    name:"Kevin",
    job:"Developer",
    address:{
        street:"876 Test Steet",
        city:"Newyork",
        pobox:77557
    }
}

> one to many
{
    _id:ObjectId('34534'),
    name:"Kevin",
    job:"Developer",
    address:
    [
        {
            street:"876 Test Steet",
            city:"Newyork",
            pobox:77557,
            type:"permanent"
        },
        {
            street:"876 Test Steet",
            city:"London",
            pobox:77557,
            type:"temp"
        }
    ]
}

db.user.find({},{address[0]:1})

//limit the record
db.rest.find().pretty().limit(1)

// find with condition
db.rest.find({state_id:2})

//projection
db.rest.find({condition},{projection})


db.rest.find({},{restaurant_name:1,address:1,_id:0})


db.rest.find({},{restaurant_name:1,address:1,_id:0})


db.rest.find({},{mealTypes:0,cuisines:0,image_gallery:0})

db.rest.find({state_id:3},{restaurant_name:1,address:1,_id:0})

//////
db.rest.find({state_id:2,"mealTypes.mealtype_id":5},{restaurant_name:1,mealTypes:1,_id:0})

///Count
db.rest.count();
db.rest.count({state_id:2})
db.rest.find({state_id:2}).count()

// https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

///Or & And
db.rest.find(
    {$or:[{"mealTypes.mealtype_id":2},{"mealTypes.mealtype_id":4}]},
    {restaurant_name:1,mealTypes:1,_id:0}
).pretty()


db.rest.find(
    {$and:[{"mealTypes.mealtype_id":2},{"mealTypes.mealtype_id":4}]},
    {restaurant_name:1,mealTypes:1,_id:0}
).pretty()


//// gt and lt
db.rest.find({cost:{$lt:500}},{restaurant_name:1,cost:1})
db.rest.find({cost:{$gt:500}},{restaurant_name:1,cost:1})

db.rest.find({cost:{$gt:500,$lt:800}},{restaurant_name:1,cost:1})


db.rest.find(
    {$or:[{cost:{$gt:500,$lt:800},{cost:{$gt:700,$lt:1000}]}
    ,{restaurant_name:1,cost:1})


db.rest.find(
    {"mealTypes.mealtype_name":{$in:['Breakfast','Lunch','Dinner']}},
    {restaurant_name:1,mealTypes:1,_id:0}
).pretty()


db.rest.find(
    {"mealTypes.mealtype_name":{$nin:['Breakfast','Lunch','Dinner']}},
    {restaurant_name:1,mealTypes:1,_id:0}
).pretty()

/// sort

db.rest.find({},{restaurant_name:1,cost:1}).pretty()

db.rest.find({},{restaurant_name:1,cost:1}).sort({cost:1}).pretty()
db.rest.find({},{restaurant_name:1,cost:1}).sort({cost:-1}).pretty()

db.rest.find({},{restaurant_name:1,cost:1}).sort({restaurant_name:1}).pretty()


db.rest.find({},{restaurant_name:1,cost:1}).sort({cost:1}).limit(5)

db.rest.find({},{restaurant_name:1,cost:1}).sort({cost:1}).skip(5).limit(5)


/////////////////
db.orders.insert({_id:1,"orderCity":"London","OrderDateTime":ISODate("2023-02-10")})
db.orders.insert({_id:2,"orderCity":"Nice","OrderDateTime":ISODate("2023-01-20")})
db.orders.insert({_id:3,"orderCity":"Paris","OrderDateTime":ISODate("2023-02-09")})
db.orders.insert({_id:4,"orderCity":"Amsterdam","OrderDateTime":ISODate("2023-03-10")})
db.orders.insert({_id:5,"orderCity":"Amsterdam","OrderDateTime":ISODate("2023-03-13")})

db.orders.find().pretty().sort({OrderDateTime:1})


db.orders.find({OrderDateTime:{$gte:ISODate("2023-02-01"),$lte:ISODate("2023-03-31")}}).sort({OrderDateTime:1,orderCity:1})

//////////
update > put/patch
upsert > update+insert

db.collection.update(
    <condition>
    <what you want to update>
)