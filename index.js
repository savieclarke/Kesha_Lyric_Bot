console.log("the bot is starting");


var Twit = require('twit');
require('dotenv').config();


var T = new Twit ({
consumer_key : 'process.env.consumer_key',
consumer_secret : 'process.env.consumer_secret',
access_token : 'process.env.access_token',
access_token_secret : 'process.env.access_token_secret',
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


