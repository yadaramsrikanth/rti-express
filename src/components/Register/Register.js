import { useState } from "react"
import "./Register.css"

const Register =()=>{
    
    const [email,setemail]=useState("")

    
    const [errors,setErrors]=useState({})
    const [success,setSuccess]=useState("")

const onClickToRegister=(e)=>{
   e.preventDefault()
   let errors={}
  
   if(!email) errors.email="Email is Required"
   setErrors(errors)
 if(Object.keys(errors).length===0){
    setSuccess("User Registered Successfully")
   

    setemail("")

 }else{
    setSuccess("")
 }
}


    return <form className="register-from" onSubmit={onClickToRegister}>
       
         <input className="register-input-element" onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Enter email.." />
                {errors.email&&<p className="error-text">*{errors.email}</p>}

          

    <button className="register-button">Register</button>
    {success && <p className="success-message">{success}</p>}
    </form>
} 
export default Register