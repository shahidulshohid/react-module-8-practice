
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StateFullForm from './components/StateFullForm/StateFullForm'
// import ReUsableState from './Hooks/ReusableForm/ReusableForm'


function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log('Sign Up data', data )
  // }
  // const handleUpdateProfile = (data) => {
  //   console.log('Update Profile', data )
  // }

  return (
    <>
      <h1>Form Master</h1>
      
      <Grandpa></Grandpa>

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableState formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign UP</h2>
          <p>Please Sign Up Now</p>
        </div>
      </ReUsableState>
      <ReUsableState formTitle={"Profile Update"} submitBtnText='Update' handleSubmit={handleUpdateProfile}>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile update</p>
        </div>
      </ReUsableState> */}
      
    </>
  )
}

export default App
