export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

const postsApiUrl = process.env.REACT_APP_POST_API

const allPosts = async (): Promise<Post[] | undefined> => {
  return fetch(postsApiUrl as string, { method: 'GET' })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err))
}

export default { allPosts }
