import client from '../../sanity-backend/sanity-client'

export const getJogos = async () => {
    const jogos = await client.fetch(`*[_type == "jogos"]`)
    return jogos
  }