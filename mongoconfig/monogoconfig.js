const { mongoose } = require("mongoose")

const connect_mongodb = async () => {
   await mongoose.connect(process.env.MONGO_DB_URL).then(() => {
        return console.log(`NEXA SOUND CONNECTED TO MONGO.`)
    }).catch((error) => {
        return console.log(`NEXA SOUND NO CONNECTED TO MONGO ERROR: ${error}`)
    })
}

module.exports = connect_mongodb