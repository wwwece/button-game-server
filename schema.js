const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt } = graphql;
const counter = require('./counter-service');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    addCounter: {
      type: GraphQLInt,
      resolve() {
        return counter.addCounter(1);
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = schema;
