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