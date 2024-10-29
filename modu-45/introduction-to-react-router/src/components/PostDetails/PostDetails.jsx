import {useNavigate} from 'react-router-dom'
import {useLoaderData} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    const {postId} = useParams()
    console.log(postId)

    const {id, title, body} = post
    const handleGoBack = ()=> {
        navigate(-1)
    }
    return (
        <div>
            <h3>Post Details about: {id}</h3>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;