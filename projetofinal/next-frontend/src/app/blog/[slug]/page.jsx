import urlFor from "@/utils/get-image"
import client from "../../../../sanity-backend/sanity-client"
import Image from "next/image"

export default async function BlogPage({params}) {
    const post = await client.fetch(`*[_type == "posts" && slug.current == '${params.slug}']`)
    const slugPost = post[0]
    return(
        <div>
            <h1>{slugPost.title}</h1>
            <Image src={urlFor(slugPost.image).url()} width={1200} height={500} alt="Imagem de post de blog"/>
            <p>{slugPost.text}</p>
        </div>
    )
}