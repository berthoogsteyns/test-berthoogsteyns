import { Layout, Menu, MenuProps } from 'antd'
import { Header } from 'antd/lib/layout/layout'
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
  height: calc(100vw - 64px);
`

const Body = styled.div`
  padding: 2rem;
  width: 80vw;
  background-color: '#A7D2CB';
`

const layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <FullScreen>
      <Layout>
        <Header>
          <Menu theme="light" mode="horizontal">
            Test
          </Menu>
        </Header>
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
