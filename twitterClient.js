require('dotenv').config({ debug: true })
const {TwitterApi} = require("twitter-api-v2");



const client = new TwitterApi({
appKey: process.env.appKey,
appSecret : process.env.appSecret,
accessToken : process.env.accessToken,
accessSecret : process.env.accessSecret

})

console.log("working")


const rwClient = client.readWrite

module.exports = rwClient