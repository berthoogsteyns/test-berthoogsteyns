import { Layout, Menu, MenuProps } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React, { FC } from 'react'
import styled from 'styled-components'
import { FullScreen } from '../styles/container.styled'

const siderItems: MenuProps['items'] = [
  { key: 'users', label: 'Users' },
  { key: 'posts', label: 'Posts' },
]

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

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FullScreen>
      <Layout>
        <Container>
          <Sider theme="light">
            <Menu mode="inline" items={siderItems}></Menu>
          </Sider>
          <Body>{children}</Body>
        </Container>
      </Layout>
    </FullScreen>
  )
}

export default layout
