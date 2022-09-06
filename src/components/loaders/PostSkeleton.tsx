import { Skeleton } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const PostSkeleton: FC = () => {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} loading paragraph={{ rows: 2 }} active />
      ))}
    </Container>
  )
}

export default PostSkeleton
