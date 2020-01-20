const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt } = graphql;
const counter = require('./counter-service');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    counter: {
      type: GraphQLInt,
      resolve() {
        return counter.getCounter();
      }
    }
  }
})

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
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
  query: queryType,
  mutation: mutationType
});

module.exports = schema;
