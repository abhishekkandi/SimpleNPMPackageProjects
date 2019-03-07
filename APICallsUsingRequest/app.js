const request = require('request');
const requestPromise = require('request-promise');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  if(!error && response.statusCode == 200){
    const parsedData = JSON.parse(body);
    console.log(`1 - ${parsedData.name} lives in ${parsedData.address.city}`)
  }
 });
 
 requestPromise('https://jsonplaceholder.typicode.com/users/1')
    .then((body) => {
        const parsedData = JSON.parse(body);
        console.log(`2 - ${parsedData.name} lives in ${parsedData.address.city}`)
    })
    .catch((err) => {
        console.log('Error - ',err)
    })
 