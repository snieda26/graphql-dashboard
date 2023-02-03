import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/second.js'

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = 3000;

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log("server was started at port " + PORT)
})