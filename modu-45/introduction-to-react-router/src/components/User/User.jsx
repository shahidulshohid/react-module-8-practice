import {Link} from 'react-router-dom'
const Use = ({user}) => {
    const {id, name, email, phone} = user

    const userStyle = {
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'20px',
        margin:'5px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}> User Details</Link>
            <Link to={`/user/${id}`}>
            <button>Click me</button>
            </Link>
        </div>
    );
};

export default Use;