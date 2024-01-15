import Posts from "@/components/blog/page"
import { getData } from "@/utils/getData"
import style from './blog.module.css' 

const posts = await getData('posts')

export default function Blog(){
    return (
        <div>
            <h1 className={style.title}>BLOG</h1>
            <Posts posts={posts}/>
        </div>
    )
}
