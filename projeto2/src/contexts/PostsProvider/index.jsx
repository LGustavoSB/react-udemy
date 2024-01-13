import { PostsContext } from './context';
import P from 'prop-types';
import { data } from './data';
import React, { useReducer } from 'react';
import { reducer } from './reducer';

export const PostsProvider = ({ children }) => {
    const [postsState, postsDispatch] = useReducer(reducer, data);

    return <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>;
};

PostsProvider.propTypes = {
    children: P.node.isRequired,
};
