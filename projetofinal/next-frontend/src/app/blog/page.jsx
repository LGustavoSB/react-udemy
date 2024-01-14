import Posts from "@/components/blog/page"
import { getPosts } from "@/utils/get-posts"
import style from './blog.module.css' 

const posts = await getPosts()

export default function Blog(){
    return (
        <div>
            <h1 className={style.title}>BLOG</h1>
            <Posts posts={posts}/>
        </div>
    )

}