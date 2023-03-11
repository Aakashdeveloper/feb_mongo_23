use products
db.createUser( { user: "accountAdmin02",
                 pwd: passwordPrompt(),
                 customData: { employeeId: 123451 },
                 roles: [ { role: "clusterAdmin", db: "admin" },
                          { role: "readAnyDatabase", db: "admin" },
                          { role: "readAnyDatabase", db: "sepIntern.test" },
                          "readWrite"] },
               { w: "majority" , wtimeout: 5000 } )


db.createUser( { user: "testuser5",
                 pwd: passwordPrompt(),
                 customData: { employeeId: 988821 },
                 roles: [ 
                     { role: "readAnyDatabase", db: "admin" },
                     { role: "clusterAdmin", db: "admin" },
                          "readWrite"] },
               { w: "majority" , wtimeout: 5000 } )

db.dropUser("accountAdmin01",{ w: "majority" , wtimeout: 5000 } )


mongo -u accountAdmin02 -p 12345678 --authenticationDatabase sepIntern

               