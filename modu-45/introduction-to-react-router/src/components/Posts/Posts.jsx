import Post from '../Post/Post';
import {useLoaderData} from 'react-router-dom'
const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h3>Posts:{posts.length}</h3>
            <div className='users'>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;