import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components'
import Body from './components/body'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Header />
      <Body />
  </React.StrictMode>,
)
