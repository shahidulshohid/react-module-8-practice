import useInputState from "../../Hooks/UseInputState";
const HookForm = () => {
// const [name, handleNameChange] = useInputState('Rojoni')
const emailState = useInputState('Rojoni@sojoni.go') //how to got value and onChange in emailState from useInputState.

    const handleSubmit = e => {
        e.preventDefault()
        console.log('form data', emailState.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text"/> */}
                <br />   
                <input {...emailState} type="email" />
                <br />
                <input type="password"/>
                <br />
                <input type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default HookForm;

