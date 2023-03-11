MongoDb
> Database best used for unstructured data
> Can be use for structured as well data


Extension
> vscode-icons

Sql

RollNo | Hindi | English| Computer |
  1    |   80  |        |   98     |
  2    |       |   70   |          |
  3    |  78   |        |          |

Account No | Date  | Amount Withdraw | Balance
 123       | 01/02 |    1000         | 5000
 456       | 03/02 |    7000         | 59000


NoSql > Not a sql (MongoDB)
Javascript
JSON > Javascript Object notation
[
    {
        "RollNo":1,
        "Hindi":80,
        "Computer":98
    },
    {
        "RollNo":2,
        "English":70
    },
    {
        "RollNo":3,
        "Hindi":78
    }
]


SQL               MongoDB
Database          Database
Table             Collection
Row               Document
Select            Find
Insert            Insert
Update            Update
Delete            Remove
Joins             Lookups
Multiple-tables   Nested Collection
Avoid Repeation   No Issue with repeation


https://www.mongodb.com/try/download/community-kubernetes-operator
Local 
# window
> Create one folder in c drive by the name of data
C:/data
> Inside data create folder by the name of db
C:/data/db

# Mac/linux
> open terminal
> mkdir data/db

>>>>Server
> Which start mongodb
> Should always running if using database
>>>>Shell
> Command line tool
> Use to verify the query

Default PORT > 27017

# Window
# Step to run mongodb Server
> open one cmd
> Go inside the bin folder
C:/program File/Mongodb/Server/4.4.1/bin
> type mongod
> Do not close this cmd

# Step to run mongodb client
> open one cmd
> Go inside the bin folder
C:/program File/Mongodb/Server/4.4.1/bin
> type mongo


# mac/linux
# Step to run mongodb Server
> open terminal
> mongod --dbpath data/db

# Step to run mongodb client
> open terminal
> mongo

Cloud
> https://cloud.mongodb.com/v2/5ee5a0bddc13ab5f3761d64a#/clusters

Network Access
> Add IP Address > 

Database Access
> Add New Database User

mongodb+srv://abc:TesTPasswOrD@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority

////
Install Compass
