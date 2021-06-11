import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true
        })

        console.log(`MONGO_DB CONNECTED: ${conn.connection.host}`)
    } catch (error) {
        console.error(`ERROR: ${error.message}`)
        process.exit(1)   //why 1 in bracket?
    }
}

export default connectDB