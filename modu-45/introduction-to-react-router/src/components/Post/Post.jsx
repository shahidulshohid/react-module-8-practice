import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Post = ({post}) => {
    const {title, id} = post

    const navigate = useNavigate()

    const postStyle = {
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'20px',
        margin:'5px'
    }
    const handleShowDetail = ()=> {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post</Link>
            <Link to={`/post/${id}`}><button>Show details</button></Link>
            <button onClick={handleShowDetail}>Click to see detail</button>
        </div>
    );
};

export default Post;