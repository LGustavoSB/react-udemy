"use server"
import Image from 'next/image'
import PostCard from '../ui/cards/post-card/page'
import urlFor from '@/utils/get-image'
import style from './blog.module.css'

const Posts = ({posts}) => {
    
    return(
        <div>
            <div className={style.containerConteudoPrincipal}>
                <Image src={urlFor(posts[0].image).url()} width={1000} height={400} alt='Imagem de post em destaque'/>
                <div className={style.textConteudoPrincipal} >
                    <h1>{posts[0].title}</h1>
                    <p>Por {posts[0].author}, {posts[0].date}</p>
                    <p>{posts[0].text.length > 500 ? `${posts[0].text.slice(0, 500)}...` : posts[0].text}</p>
                </div>
            </div>
            {posts.map((post, key) => (
                <div key={key}>
                    <PostCard post={post} slug={post.slug}/>
                </div>)
            )}
        </div>
    )
} 

export default Posts