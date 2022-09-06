import React from 'react'
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom/client'
// import User from './pages/users'
import Layout from './components/layout/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './pages/users'
import Posts from './pages/posts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
)
