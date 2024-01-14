import style from "./jogoCard.module.css"
import Image from "next/image"
import urlFor from "@/utils/get-image"
import Link from "next/link";

export default function JogoCard({jogo, slug}){
    return(
        <div className={style.jogoCard}>
        <Link href={`/jogo/${slug.current}`} jogo={jogo}><Image src={urlFor(jogo.image).url()} width={500} height={300} alt="Imagem de jogo"/></Link>

        </div>
    )
}