var axios = require('axios');
var data = JSON.stringify({
    "collection": "watches",
    "database": "flipkart",
    "dataSource": "Cluster0",
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-akxmp/endpoint/data/v1/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
