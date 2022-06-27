console.log("it's working");

var Twit = require('twit');
require('dotenv').config();

console.log(process.env);

var T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
  })