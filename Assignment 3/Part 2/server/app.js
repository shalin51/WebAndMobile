var express=require('express')
var app=express();
var Twitter = require('twitter');

//This keys will not work
var client = new Twitter({
    consumer_key: 'N8agGZGhavDpt7wBHH1gXDhLx',
    consumer_secret: 'KrzZb0W74KcmwRGgH034tru7oAzZm3JCxWFHvp7F0LVHpbRw8i',
    access_token_key: '1295548986-vVDRkE7iYjrIlK5P5e4gKCRtRDmjmXF0XIxUcVi',
    access_token_secret: 'flvlk8JCd9W8UROlYnQs9q1gZDVA3jpZHw36IOpnkzKw3'
  });

  app.get('/', function (req, res) {
    client.get('friends/list', function(error, tweets, response) {
            
        console.log(JSON.stringify(response) );  // Raw response object. 
        res.send( JSON.stringify(response))
      });
   
  })

  

  app.listen(8080, () => console.log('Example app listening on port 8080!'))