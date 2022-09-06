import { Layout, Menu, MenuProps } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FullScreen } from '../styles/container.styled'

const Container = styled.div`
  display: flex;
  height: 100vh;
`

const Body = styled.div`
  padding: 2rem;
  height: 100%;
  height: 100vh;
  overflow-y: auto;
`

const PageLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const pathName = location.pathname.replace('/', '')

  const siderItems: MenuProps['items'] = [
    {
      key: 'users',
      label: 'Users',
      onClick: () => navigate('/users'),
    },
    {
      key: 'posts',
      label: 'Posts',
      onClick: () => navigate('/posts'),
    },
  ]

  return (
    <FullScreen>
      <Layout>
        <Container>
          <Sider theme="light">
            <Menu defaultSelectedKeys={[pathName]} mode="inline" items={siderItems}></Menu>
          </Sider>
          <Body>{children}</Body>
        </Container>
      </Layout>
    </FullScreen>
  )
}

export default PageLayout
