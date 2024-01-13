import { useContext, React, useEffect } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';

export const Posts = () => {
    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;

    useEffect(() => {
        console.log(loadPosts);
        loadPosts(postsDispatch);
    }, [postsDispatch]);

    return (
        <div className="App">
            {postsState.loading && <h2>Carregando posts...</h2>}
            {postsState.posts.map((p) => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
    );
};
