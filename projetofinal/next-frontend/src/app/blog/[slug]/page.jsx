import urlFor from "@/utils/get-image"
import client from "../../../../sanity-backend/sanity-client"
import Image from "next/image"
import style from './slugPost.module.css'

export default async function BlogPage({params}) {
    const post = await client.fetch(`*[_type == "posts" && slug.current == '${params.slug}']`)
    const slugPost = post[0]
    return(
        <div className={style.postContainer}>
            <Image src={urlFor(slugPost.image).url()} width={1200} height={500} alt="Imagem de post de blog" className={style.postImage}/>
            <h1 className={style.postTitle}>{slugPost.title}</h1>
            <p className={style.postInfo}>{slugPost.author}, {slugPost.date}</p>
            <p className={style.postText}>{slugPost.text}</p>
        </div>
    )
}