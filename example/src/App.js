import React from 'react'

import { ColoLink } from 'colo-link'
import 'colo-link/dist/index.css'

const App = () => {
  return (
    <ColoLink
      scope={'calls:read calls:write'}
      integration={'slack'}
      userId={'shreyas.jaganmohan@gmail.com'}
      clientId={'1317404487779.1302461420935'}
      redirectUrl={'http://localhost:3000'}
    />
  )
}

export default App
