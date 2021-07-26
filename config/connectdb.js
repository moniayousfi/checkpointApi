const mongoose = require('mongoose')
require('dotenv').config({ path: '/.env' })
const Mongo_uri=process.env.Mongo_uri
const connectdb = async()=>{
    try {
        await mongoose.connect(Mongo_uri,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log('successfully connceted')
    } catch (error) {
        console.log('cannot conncet '+ error)
    }
}

module.exports=connectdb