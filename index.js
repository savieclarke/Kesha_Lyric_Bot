console.log("the bot is starting");


const { config } = require('dotenv');
import { TwitterApi } from 'twitter-api-v2';

require('dotenv').config();


var T = new Twit ({
//consumer_key : 'process.env.consumer_key',
//consumer_secret : 'process.env.consumer_secret',
ACCESS_TOKEN : 'process.env.ACCESS_TOKEN',
ACCESS_TOKEN_SECRET : 'process.env.ACCESS_TOKEN_SECRET',
API_KEY : 'process.env.API_KEY',
API_KEY_SECRET : 'process.env.API_KEY_SECRET',
BEARER_TOKEN:  'process.env.BEARER_TOKEN'
});
 

var tweet = {
    status: 'We were lovers in a past life'
}

T.post('statuses/update', tweet, tweeted);

function tweeted (err, data, response) {
console.log(data)
    if (err) {
        console.log("something went wrong!");

    } else {
        console.log("it worked!");
    }
}


