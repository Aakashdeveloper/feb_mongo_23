mongoexport --db movies --collection events --type=csv --fields _id,name,language,rate,type,imageUrl --out events.csv

mongoimport --db testdb --collection events --file events.csv

///
mongodump -o path to dump

mongodump -o pathtodump --db dbname

mongodump -o pathtodump --db dbname --c colletionname

mongorestore pathofdump

//////////Monitor
> mongostat
> mongotop