import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';
import './App.css';
import { React } from 'react';

function App() {
    return (
        <PostsProvider>
            <div>
                <Posts />
            </div>
        </PostsProvider>
    );
}
export default App;
