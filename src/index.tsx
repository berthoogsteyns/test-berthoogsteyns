import React from 'react'
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom/client'
// import User from './pages/users'
import Post from './pages/posts'
import Layout from './components/layout/layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Layout>
      <Post />
    </Layout>
  </React.StrictMode>,
)
