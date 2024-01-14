import Image from "next/image"
import urlFor from "@/utils/get-image"
import Link from "next/link";
import style from './postCard.module.css'

export default function PostCard({post, slug}){
    return(
        <div className={style.postCard}>
            <Link href={`/blog/${slug.current}`} post={post}><Image src={urlFor(post.image).url()} width={500} height={300} alt="Imagem de post"/></Link>
            <p>{post.title}</p>
        </div>
    )
}