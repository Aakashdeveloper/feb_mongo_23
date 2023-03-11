curl --location --request POST 'https://ap-south-1.aws.data.mongodb-api.com/app/data-akxmp/endpoint/data/v1/action/find' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: ' \
--data-raw '{
    "collection":"watches",
    "database":"flipkart",
    "dataSource":"Cluster0"
}'



var axios = require('axios');
var data = JSON.stringify({
    "collection": "watches",
    "database": "flipkart",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});


