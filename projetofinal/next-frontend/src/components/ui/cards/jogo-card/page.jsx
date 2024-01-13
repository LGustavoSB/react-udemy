import Image from "next/image"
import urlFor from "@/utils/get-image"
import Link from "next/link";

export default function JogoCard({jogo, slug}){
    return(
        <div>
        <Link href={`/jogo/${slug.current}`} jogo={jogo}><Image src={urlFor(jogo.image).url()} width={500} height={300}/></Link>

        </div>
    )
}