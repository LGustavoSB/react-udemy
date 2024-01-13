import Posts from "@/components/blog/page"
import { getPosts } from "@/utils/get-posts"

const posts = await getPosts()

export default function Blog(){
    return (
        <>
            <Posts posts={posts}/>
            <h1>Blog</h1>
        </>
    )

}