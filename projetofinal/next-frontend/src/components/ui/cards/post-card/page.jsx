import Image from "next/image"
import urlFor from "@/utils/get-image"
import Link from "next/link";

export default function PostCard({post, slug}){
    return(
        <div>
            <Link href={`/blog/${slug.current}`} post={post}><Image src={urlFor(post.image).url()} width={500} height={300}/></Link>
            <p>{post.title}</p>
        </div>
    )
}