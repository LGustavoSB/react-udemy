import urlFor from "@/utils/get-image"
import client from "../../../../sanity-backend/sanity-client"
import Image from "next/image"
import Button from "@/components/ui/button/page"
import style from "./slugJogo.module.css"

export default async function JogoPage({params}) {
    const jogo = await client.fetch(`*[_type == "jogos" && slug.current == '${params.slug}']`)
    const slugJogo = jogo[0]
    return(
        <div className={style.container}>
            <h1>{slugJogo.title}</h1>
            <Image src={urlFor(slugJogo.image).url()} width={1200} height={500}/>
            <div>
                <p>R${slugJogo.value}</p>
                <Button text="Comprar"/>
            </div>
            <p>{slugJogo.text}</p>
        </div>
    )
}