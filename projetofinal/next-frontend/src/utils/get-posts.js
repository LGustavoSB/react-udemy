import client from '../../sanity-backend/sanity-client'

export const getPosts = async () => {
    const posts = await client.fetch(`*[_type == "posts"]`)
    return posts
  }