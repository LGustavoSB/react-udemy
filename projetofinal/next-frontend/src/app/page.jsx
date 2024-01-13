import Image from 'next/image'
import styles from './home.module.css'
import Sobre from '@/components/sobre/page'
import Vagas from '@/components/vagas/page'
import Jogos from '@/components/jogos/page'
import { getJogos } from "@/utils/get-jogos"

const jogos = await getJogos()

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Jogos jogos={jogos}/>
        <Sobre/>
        <Vagas/>
      </div> 
      
    </>
  )
}

