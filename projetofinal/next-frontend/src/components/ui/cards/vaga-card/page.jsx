import style from './vaga.module.css'
import Link from 'next/link'

export default function VagaCard({vaga}){
    return(
       
        <Link href={'/carreira'}>
            <div className={style.containerVaga}>
                <h3 className={style.title}>{vaga.vaga}</h3>
                <div className={style.descricao}>
                    {vaga.tags.map((tag, key) => <p className={style.descricaoText} key={key}>{tag.title}</p>)}
                </div>
            </div>
        </Link>
       
        
    )
}