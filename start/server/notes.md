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