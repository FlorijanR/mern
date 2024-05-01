const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
CONNECTION_URL = "mongodb://user1:bazepodataka123@ac-2l9ofmj-shard-00-00.ntqnoqg.mongodb.net:27017,ac-2l9ofmj-shard-00-01.ntqnoqg.mongodb.net:27017,ac-2l9ofmj-shard-00-02.ntqnoqg.mongodb.net:27017/?ssl=true&replicaSet=atlas-7fz5v3-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL)
mongoose.connection.once('open', () => {
    console.log("Connection to database has been established successfully")
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5000, () => {
    console.log('Server is running on Port 5000')
})