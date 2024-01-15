"use server"
import Image from 'next/image'
import JogoCard from '../ui/cards/jogo-card/page'
import urlFor from '@/utils/getImage'
import style from './jogos.module.css'
import Link from 'next/link'


const Jogos = ({jogos}) => {
    const mainJogoLink = jogos[0].slug
    return(
        <div className={style.container} id='jogos'>
            <Link href={`/jogo/${mainJogoLink.current}`} jogo={jogos[0]}><Image className={style.gameBigCard} src={urlFor(jogos[0].image).url()} width={1000} height={400}  alt='Imagem de jogo em destaque'/></Link>
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