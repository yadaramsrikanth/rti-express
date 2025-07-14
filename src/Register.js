import { useState } from "react"
import "./Register.css"

const Register =()=>{
    const [username,setUsername]=useState("")
    const [email,setemail]=useState("")

    const [password,setpassword]=useState("")
    const [errors,setErrors]=useState({})
    const [success,setSuccess]=useState("")

const onClickToRegister=(e)=>{
   e.preventDefault()
   let errors={}
   if(!username) errors.username="Username is Required"
   if(!password) errors.password="Password is Required"
   if(!email) errors.email="Email is Required"
   setErrors(errors)
 if(Object.keys(errors).length===0){
    setSuccess("User Registered Successfully")
    setUsername("")
    setpassword("")

    setemail("")

 }else{
    setSuccess("")
 }
}


    return <form className="register-from" onSubmit={onClickToRegister}>
        <input className="register-input-element"  onChange={(e)=>setUsername(e.target.value)}  value={username} type="text" placeholder="Enter Username.." />
        {errors.username&&<p className="error-text">*{errors.username}</p>}
         <input className="register-input-element" onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="Enter email.." />
                {errors.email&&<p className="error-text">*{errors.email}</p>}

          <input className="register-input-element" onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Enter Password.." />
            {errors.password&&<p className="error-text">*{errors.password}</p>}

    <button className="register-button">Register</button>
    {success && <p className="success-message">{success}</p>}
    </form>
} 
export default Register