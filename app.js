const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./data/schema');

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(process.env.PORT || 4000, () => {
  console.log(`App listening on port ${process.env.PORT || 4000}`)
})
