"use server"
import Image from 'next/image'
import PostCard from '../ui/cards/post-card/page'
import urlFor from '@/utils/getImage'
import style from './blog.module.css'
import Link from 'next/link'

const Posts = ({posts}) => {
    const mainPostLink = posts[0].slug
    return(
        <div className={style.container}>
            <Link href={`/blog/${mainPostLink.current}`} post={posts[0]}>
                <div className={style.mainPostContainer}>
                    <Image src={urlFor(posts[0].image).url()} width={1000} height={400} alt='Imagem de post em destaque' className={style.mainPostImage}/>
                    <div className={style.mainPostContent} >
                        <h1 className={style.mainPostTitle}>{posts[0].title}</h1>
                        <p className={style.mainPostInfo}>Por {posts[0].author}, {posts[0].date}</p>
                        <p className={style.mainPostText}>{posts[0].text.length > 250 ? `${posts[0].text.slice(0, 274)}...` : posts[0].text}</p>
                    </div>
                </div>
            </Link>
            <div className={style.postsContainer}>
            {posts.map((post, key) => (
                <div key={key} className={style.smallPostCard}>
                    <PostCard post={post} slug={post.slug}/>
                </div>)
            )}
            </div>
        </div>
    )
} 

export default Posts
