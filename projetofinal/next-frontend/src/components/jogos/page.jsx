"use server"
import Image from 'next/image'
import JogoCard from '../ui/cards/jogo-card/page'
import urlFor from '@/utils/get-image'
import style from './jogos.module.css'


const Jogos = ({jogos}) => {
    return(
        <div className={style.container} id='jogos'>
            <Image className={style.gameBigCard} src={urlFor(jogos[0].image).url()} width={1000} height={400}  />
            <div className={style.containerImageSmall} >
                {jogos.map((jogo, key) => (
                    <div className={style.gameSmallCard} key={key}>
                        <JogoCard jogo={jogo} slug={jogo.slug}/>
                    </div>)
                )}
            </div>
            
        </div>
    )
} 

export default Jogos