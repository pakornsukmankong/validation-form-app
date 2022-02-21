import { useState } from "react";
import Swal from 'sweetalert2'

const FormComponent = () => {
  const [userName,setUserName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [rePassword,setRePassword] = useState('')
  const [checkbox,setCheckBox] = useState(false)

  const [errorUsername,setErrorUsername] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  const [errorPassword,setErrorPassword] = useState('')
  const [errorRePassword,setErrorRePassword] = useState('')
  const [errorCheckBox,setErrorCheckBox] = useState('') 

  const validation = () => {
      let isValid = true;
      
      if(userName.length>8){
        setErrorUsername('is-valid')
      }else{
        setErrorUsername('is-invalid')
        isValid = false;
      }

      if(email.includes("@"&&".")){
        setErrorEmail('is-valid')
      }else{
        setErrorEmail('is-invalid')
        isValid = false;
      }

      if(password.length>8){
        setErrorPassword('is-valid')
      }else{
        setErrorPassword('is-invalid')
        isValid = false;
      }

      if(rePassword !== "" && rePassword === password) {
        setErrorRePassword('is-valid')
      }else{
        setErrorRePassword('is-invalid')
        isValid = false;
      }

      if(checkbox === true){
        setErrorCheckBox('is-valid')
      }else{
        setErrorCheckBox('is-invalid')
        isValid = false;
      }
      
      return isValid
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const isValid = validation()
    if(isValid){
      Swal.fire({
        icon: 'success',
        title: 'Congratulation',
        text: 'You just submitted',
      })
      setUserName('')
      setEmail('')
      setPassword('')
      setRePassword('')
      setCheckBox(false)
      
      setErrorUsername('')
      setErrorEmail('')
      setErrorPassword('')
      setErrorRePassword('')
      setErrorCheckBox('')
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: 'Please check your input',
      })
    }

    
  }

  
  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-center mb-4">Sign Up</h1>
      {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" className={`form-control ${errorUsername}`} value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
        <div className="valid-feedback">Correct</div>
        <div className="invalid-feedback">Please enter more than 8 characters</div>
      </div>

      {/* <!-- Email input --> */}
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="text" className={`form-control ${errorEmail}`} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <div className="valid-feedback">Correct</div>
        <div className="invalid-feedback">Please enter email address correctly</div>
      </div>

      {/* <!-- Password input --> */}
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className={`form-control ${errorPassword}`} value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <div className="valid-feedback">Correct</div>
        <div className="invalid-feedback">Password Must more than 8 characters</div>
      </div>
      {/* <!-- Re-Password input --> */}
      <div className="mb-5">
        <label className="form-label">Re-Enter Password</label>
        <input type="password" className={`form-control ${errorRePassword}`} value={rePassword} onChange={(e)=>{setRePassword(e.target.value)}}/>
        <div className="valid-feedback">Correct</div>
        <div className="invalid-feedback">Password not match</div>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="form-check mb-4">
        <input className={`form-check-input me-2 ${errorCheckBox}`} type="checkbox" checked={checkbox} onChange={(e)=>{setCheckBox(e.target.checked)}} />
        <label className="form-check-label">
          You agree to Privacy Policy & Terms of Use
        </label>
        <br></br>
        <div className="invalid-feedback">You must agree before submitting.</div>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign up
      </button>
    </form>
  );
};

export default FormComponent;
