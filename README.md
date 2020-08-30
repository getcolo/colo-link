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

import MyComponent from 'colo-link'
import 'colo-link/dist/index.css'

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

## License

MIT © [getcolo](https://github.com/getcolo)
