## Button Game (Backend / GraphQL API)

Node.js / Express / GraphQL server for a simple button pressing game

Deployed in heroku: [wece-counter-game-server.herokuapp.com/graphql](http://wece-counter-game-server.herokuapp.com/graphql)

Related to frontend implemented in [github.com/WeceW/button-game-client](https://github.com/WeceW/button-game-client)

-----

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view [GraphiQL IDE](https://github.com/graphql/graphiql) it in the browser.

type

```
query {
  counter
}
```

or

```
mutation {
  addCounter
}
```

to get the current value of the counter (query) or increase counter's value by one (mutation).
