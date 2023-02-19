1--> 3 shards (3 directories to store datafiles)
2--> 3 config server (3 directories to store datafiles)
3--> 1 query router (mongos)

4--> configure (add shards)

sudo mkdir data/shard1
sudo mkdir data/shard2
sudo mkdir data/shard3


sudo mongod --shardsvr --dbpath data/shard1  --port 2001 

sudo mongod --shardsvr --dbpath data/shard2 --port 2002 

sudo mongod --shardsvr --dbpath data/shard3 --port 2003

sudo mongod --shardsvr --dbpath data/shard4 --port 2004

//Config Server
sudo mkdir data/config1
sudo mkdir data/config2
sudo mkdir data/config3

sudo mongod --configsvr --dbpath data/config1 --port 2011 --replSet rs0
sudo mongod --configsvr --dbpath data/config3 --port 2013 --replSet rs0
sudo mongod --configsvr --dbpath data/config2 --port 2012 --replSet rs0

//Run from any config server
rs.initiate(
  {
    _id: "rs0",
    configsvr: true,
    members: [
      { _id : 0, host : "localhost:2011" },
      { _id : 1, host : "localhost:2012" },
      { _id : 2, host : "localhost:2013" }
    ]
  }
)

//New Cmd
mongos --configdb "rs0/localhost:2011,localhost:2012,localhost:2013" --port 27201

//Connection to mongos
mongo --port 27201


//Add shards
sh.addShard("localhost:2001")
sh.addShard("localhost:2002")
sh.addShard("localhost:2003")


show dbs
use config
show collections
db.shards.find()


use mongoMart1

sh.enableSharding("mongoMart1")

//enable on collection level
sh.shardCollection("mongoMart1.shop1",{"_id":"hashed"})
for (var i =1;i<=20;i++)db.shop1.insert({x:i})

for (var i =42;i<=46;i++)db.shop1.insert({x:i})

//remove shard
use admin
db.runCommand({removeShard: "shard0000"})



////Adding replica in shard

sudo mongod --port 2001 --dbpath Desktop/Replica/rs1 --replSet --shardA --oplogSize 128
sudo mongod --port 2002 --dbpath Desktop/Replica/rs2 --replSet --shardA --oplogSize 128
sudo mongod --port 2003 --dbpath Desktop/Replica/rs3 --replSet --shardA --oplogSize 128

sudo mongod --port 2004 --dbpath Desktop/Replica/rs1 --replSet --shardB --oplogSize 128
sudo mongod --port 2005 --dbpath Desktop/Replica/rs2 --replSet --shardB --oplogSize 128
sudo mongod --port 2006 --dbpath Desktop/Replica/rs3 --replSet --shardB --oplogSize 128

sudo mongod --port 2007 --dbpath Desktop/Replica/rs1 --replSet --shardC --oplogSize 128
sudo mongod --port 2008 --dbpath Desktop/Replica/rs2 --replSet --shardC --oplogSize 128
sudo mongod --port 2009 --dbpath Desktop/Replica/rs3 --replSet --shardC --oplogSize 128


sudo mongod --shardsvr --dbpath Desktop/shard/shard1 --replSet shardA --port 3001

sudo mongod --shardsvr --dbpath Desktop/shard/shard2 --replSet shardB --port 3002 

sudo mongod --shardsvr --dbpath Desktop/shard/shard3  --replSet shardC -port 3003