# colo-link

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/colo-link.svg)](https://www.npmjs.com/package/colo-link) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @getcolo/colo-link
```

## Usage

```jsx
import React, { Component } from 'react'

import ColoLink from '@getcolo/colo-link'
import '@getcolo/colo-link/dist/index.css'

const App = () => {
  return (
    <ColoLink
      scope={'calls:read calls:write'}
      integration={'slack'}
      userId={"your end-user's id"}
      clientId={'oauth app client id'}
      redirectUrl={'http://localhost:3000'}
    />
  )
}
```

## Component Reference

`ColoLink`

(without using https://getcolo.dev service)

- `integration` (required) - the provider you're integrating with e.g. 'slack'
- `userId` (required) - the user id you're linking the request with (maps to the `state` value, which you can query on your callback handler to associate the retrieved access token with the same `userId`)
- `clientId` (required) - your OAuth app's client_id 
- `redirectUrl` (required) - the url of the callback handler i.e. where the user will be directed to after the authorization screen
- `scope` (required) - the scopes your app is requesting that reflects the operations it will be able to perform against the end user. 

(with https://getcolo.dev service)

- `integration` (required) - the provider you're integrating with e.g. 'slack'
- `userId` (required) - the user id you're linking the request with (maps to the `state` value, which you can query on your callback handler to associate the retrieved access token with the same `userId`)
- `coloApiKey` (required) - the api key generated from your Colo application


## License

MIT © [getcolo](https://github.com/getcolo)
