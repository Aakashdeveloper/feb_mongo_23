> List of City
> Releation between city & rest
> Meal Type
> MealType + Restaurnts+ Cuisine+ cost

Table -4
Restaurants
City
Cuisine
MealType


Restaurants

Rest Id | RestName | Cost | CityId | MealIId | CuisineId 

Collection - 2
Restaurants
City
> City
[
    {
       _id:1,
       name:'Delhi' 
    },
     {
       _id:2,
       name:'Bangalor' 
    }
]
> Restaurants
[
    {
        "_id":323423,
        "rest_id":1,
        "rest_name":"Ama Cafe",
        "city_id":1,
        "cost":450,
        "rating_text":"Very Good",
        "rating":4.5,
        "Cuisine":[
            {
                "cuisineid":1,
                "cuisineName":"North India"
            },
            {
                "cuisineid":2,
                "cuisineName":"English Breakfast"
            },
            {
                "cuisineid":3,
                "cuisineName":"Tibetan"
            }
        ],
        "mealTypes":[
           {
                "mealId":1,
                "mealName":"BreakFast"
            },
            {
                "mealId":2,
                "mealName":"Lunch"
            },
        ]
    },
    {
        "_id":323422,
        "rest_id":2,
        "rest_name":"Punbaj Grills",
        "city_id":2,
        "cost":950,
        "rating_text":"Good",
        "rating":4.1,
        "Cuisine":[
            {
                "cuisineid":1,
                "cuisineName":"North India"
            },
            {
                "cuisineid":4,
                "cuisineName":"South Indian"
            }
        ],
        "mealTypes":[
           {
                "mealId":1,
                "mealName":"BreakFast",
                "menu":[
                    {
                        "type":"Veg",
                        "items":["Panner","Dal"]
                    },
                     {
                        "type":"Non-Veg",
                        "items":["Chiken","Mutton"]
                    }
                ]
            },
            {
                "mealId":2,
                "mealName":"Lunch"
            },
            {
                "mealId":3,
                "mealName":"Dinner"
            }
        ]

    }
]



cuisine
{
    "id":1,
    "name":"North India",
    "item":["Panner",]
},
{
    "id":1,
    "name":"North India",
    "item":["Panner",]
}


/////////////////////////////////
# to see all database
> show dbs

# Go inside Db
> use database name

# to See all collections
> show collections

# to find the record
> db.collectionname.find()
* only for shell
> db.collectionname.find().pretty()

# Create new DB
use dbname

# insert into mongo
db.users.insert({"name":"Amit","City":"Delhi"})
db.users.insert({"name":"Ritika","City":"Amsterdam"})
db.users.insert({_id:1,"name":"Rohit","City":"Pune","Age":23})
db.users.insert({_id:2,"name":"Anjali","City":"Indore"})


db.users.find({_id:"63df2686c897421f7c34033b"}).pretty()


_id> Primary Key
12 bytes
5byte>Series
4byte>timestamp
3byte> random number


//// Add a series for _id
db.counters.insert({
    "_id":"cityId",
    "sequence_value":0
})

function generateSeries(sequenceName){
    var sequenceDocument = db.counters.findAndModify({
        query:{_id:sequenceName},
        update:{$inc:{sequence_value:1}},
        new:true
    })
    return sequenceDocument.sequence_value
}

db.city.insert({
    "_id":generateSeries('cityId'),
    "name":"Amsterdam",
    "country":"Netherlands"
})

db.city.insert({
    "_id":generateSeries('cityId'),
    "name":"Helsinki",
    "country":"Finland"
})

db.city.insert({
    "_id":generateSeries('cityId'),
    "name":"Venice",
    "country":"Italy"
})