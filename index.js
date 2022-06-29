const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {

    try {
        await rwClient.v1.tweet("No one can light up the night like you do")

    } catch(e) {
        console.error(e)
    }
}

    tweet()

    


