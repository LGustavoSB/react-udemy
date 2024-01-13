import client from '../../sanity-backend/sanity-client'

export const getVagas = async () => {
    const vagas = await client.fetch(`*[_type == "vagas"]`)
    return vagas
  }