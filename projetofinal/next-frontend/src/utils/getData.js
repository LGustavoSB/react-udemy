import client from '../../sanity-backend/sanity-client'

export const getData = async (type) => {
    const data = await client.fetch(`*[_type == "${type}"]`)
    return data
  }