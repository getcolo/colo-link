import React from 'react'

import { ColoLink } from 'colo-link'
import 'colo-link/dist/index.css'

const App = () => {
  return (
    <div>
      <ColoLink
        scope={'calls:read calls:write'}
        integration={'slack'}
        userId={'johnsmith@gmail.com'}
        clientId={'1317404487779.1302461420935'}
        redirectUrl={'http://localhost:3000'}
      />
      <ColoLink
        scope={'https://www.googleapis.com/auth/drive.file'}
        integration={'google'}
        userId={'johnsmith@gmail.com'}
        clientId={'856281662170-4pkbns1elvk014c0rkcjg39nj7vp4h98.apps.googleusercontent.com'}
        redirectUrl={'http://localhost:3000'}
      />
    </div>    
  )
}

export default App
