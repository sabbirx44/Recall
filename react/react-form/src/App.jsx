/* eslint-disable react/no-unescaped-entities */
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import Form from './components/Form/Form'

function App() {
  const handleSignUp = data => {
    console.log('Sign Up data: ', data);
  };

  const handleProfileUpdate = data => {
    console.log('Profile Update data: ', data);
  };

  return (
    <>
      {/* <Form /> */}
      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUp}>
        <div>
          <h2>Sign Up</h2>
          <p>It's premium!</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} submitBtnText='Update' handleSubmit={handleProfileUpdate}>
        <div>
          <h2>Update Profile</h2>
          <p>Real men always keep things up to date.</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
