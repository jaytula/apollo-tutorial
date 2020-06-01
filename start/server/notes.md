## 4. Write mutation resolvers

### Run mutations in GraphQL Playground

#### Obtain a login token

```gql
mutation Login($email: String) {
  login(email: $email)
}
```

Use `daisy@apollographql.com` for `$email` to obtain a token:

```json
{
  "data": {
    "login": "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20="
  }
}
```

### Book trips

```gql
mutation BookTrips($launchIds: [ID]!) {
  bookTrips(launchIds: $launchIds) {
    success
    message
    launches {
      id
    }
  }
}
```

Attempt with `launchIds` as `[67, 68, 69]`.

Also needed is the token in the `authorization` header:

```json
{
  "authorization": "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20"
}
```

## 5. Run your graph in production

Create an account here: https://engine.apollographql.com/

### Get a Graph Manager API key

- Create new Graph
- Add environment variable `APOLLO_KEY` in `.env`

### Check and publish with the Apollo CLI

- Start server (at `http://localhost:4000`)
- Run `npx apollo service:push --endpoint=http://localhost:5000 --graph=name-of-graph`
- Afterwards, explore the graph at https://engine.apollographql.com/
- For subsequent changes, check for breacking changes with `npx apollo service:check --endpoint=http://localhost:4000 --graph=my-graph`