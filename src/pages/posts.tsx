import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import postApi, { Post } from '../api/posts'
import PostSkeleton from '../components/loaders/PostSkeleton'

const PostWrapper = styled.div`
  padding: 1rem;
  background-color: #fcf8e8;
  border-radius: 4px;
  margin-bottom: 2rem;
`

const Title = styled.h2`
  font-size: 1.1rem;
`

const Body = styled.p``

const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>()

  useEffect(() => {
    async function fetchPosts(): Promise<void> {
      const posts = await postApi.allPosts()
      if (posts) setPosts(posts)
    }
    fetchPosts()
  }, [])

  if (!posts) return <PostSkeleton />

  return (
    <>
      {posts?.map((post) => (
        <PostWrapper key={post.id}>
          <Title>{post.title}</Title>
          <Body>{post.body}</Body>
        </PostWrapper>
      ))}
    </>
  )
}

export default Posts
