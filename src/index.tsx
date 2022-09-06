import React from 'react'
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom/client'
import User from './pages/users'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <User />
  </React.StrictMode>,
)
