import styles from './home.module.css'
import Sobre from '@/components/sobre/page'
import Vagas from '@/components/vagas/page'
import Jogos from '@/components/jogos/page'
import { getData } from "@/utils/getData"

const jogos = await getData('jogos')

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <Jogos jogos={jogos}/>
        <Sobre/>
        <Vagas/>
      </div> 
      
    </>
  )
}

