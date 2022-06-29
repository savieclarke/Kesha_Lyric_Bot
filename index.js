const rwClient = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

const tweet = async () => {

    try {
        await rwClient.v1.tweet("Don't touch my weave, don’t call me honey")

    } catch(e) {
        console.error(e)
    }
}


const job = new CronJob("0 23 * * *", () => {
    tweet()

})

job.start();
    


