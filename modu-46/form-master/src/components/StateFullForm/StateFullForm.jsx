import { useState } from "react";

const StateFullForm = () => {
    const [name, setName] = useState("Rojoni Gondha")
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password.length < 6){
            setError('password must be 6 characters or longer')
        }
        else{
            setError('')
        console.log(name,email,password)
        }
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={name} type="text" name="name" onChange={handleNameChange} />
            <br />
            <input type="text" name="email" onChange={handleEmailChange} required />
            <br />
            <input type="password" name="password" onChange={handlePasswordChange} />
            <br />
            <input type="submit" value='Submit' />
            {
                error && <p>{error}</p>
            }
            </form>
        </div>
    );
};

export default StateFullForm;