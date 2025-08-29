import  { useContext, useState } from "react";

import Modal from "react-modal"

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/teal.css";

import ReporterActivistContext from "../../ReactContext";
import "./index.css"
Modal.setAppElement("#root");


const RTIActivistForm=()=>{
  const initialFormdata={
  name:"",DOB:null,gender:"",phone:"",
  email:"",address:"",aadhar:"",media:null,pincode:"",experience:""}

   const {isActivistModal,setIsActivistModal}=useContext(ReporterActivistContext)
 const [errors,setErrors]=useState({})
 const [isSubmitted,setIsFormSubmitted]=useState(false)
 const [formData,setFormData]=useState(initialFormdata)
  // const {onClose,isOpen}=props

const onhandleChangeActivist=(e)=>{
  const{name,value,type,files}=e.target
  setFormData({...formData,
    [name]:type==="file"?files[0]:value
  })
}

const validate=()=>{
  const newErrors={}

  if(!formData.name) newErrors.name="Name is Required"
  if(!formData.DOB) newErrors.DOB="Date Of Birth is Required"
  if(!formData.gender) newErrors.gender="Please select Gender"
  if(!formData.phone) newErrors.phone="Please Enter a Phone Number"
  if(!formData.email) newErrors.phone="Gmail is Required"
  if(!formData.address) newErrors.address="Address is Required"
  
  if(!formData.media) newErrors.media="Please Upload a Photo"
  // if(!formData.designation) newErrors.designation="Designation is Required"
  if(!formData.pincode) newErrors.pincode="Pincode is Required"
  if(!formData.experience) newErrors.experience="Enter 0 if you have no experience"
  setErrors(newErrors)
  return Object.keys(newErrors).length===0
}




const submiActivistForm= async (event)=>{
   event.preventDefault()
   if (validate()){
       console.log("Form submitted:", formData);
       try{
        const formDataToSend = new FormData();

    
    Object.keys(formData).forEach((key) => {
      if (key === "DOB") {
        formDataToSend.append(key, formData.DOB ? formData.DOB.toDate().toISOString() : "");
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
        const reporterUrl="https://api.rtiexpress.in/api/v1/activist/application"
        const options={method:"POST",
        
        body:formDataToSend
        }
        const data= await fetch(reporterUrl,options)
        const responseData=await data.json()
        console.log(responseData)
        setFormData(initialFormdata)
        setErrors({})
        setIsFormSubmitted(true)

      setTimeout(() => {
      setIsFormSubmitted(false);
      setIsActivistModal(false)
    }, 3000);
       }catch(e){
        console.error("Error Submitting form",e)
       }
   }else{
      console.log("Validation errors:", errors);
   }


  
  
  
}


    return <Modal 
    isOpen={isActivistModal}
    onRequestClose={()=>setIsActivistModal(false)}
    contentLabel="Reporter Join Form"
    className="modal-content"
    overlayClassName="modal-overlay"
    >
      {isSubmitted? <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Activist Form is Submitted!</h2>
    </div>:
      
      <form  encType="multipart/form-data" className="rti-reporter-form-container" onSubmit={submiActivistForm}>
        <h3 className="rti-reporter-heading">RTI ACTIVIST FORM</h3>
       <label className="rti-reporter-label-element">Name:</label>
        <input value={formData.name} name="name" className="rti-reporter-input-element" type="text"  placeholder="John Doe" onChange={onhandleChangeActivist}/>
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
         
         <label className="rti-reporter-label-element">Select Your DOB:</label>
          {/* <input className="rti-reporter-input-element" type="date"  placeholder="DD-MM-YYYY"/> */}
        <DatePicker
                    // id="dob"
                    // selected={formData.DOB}
                    // onChange={(date) =>setFormData({...formData,DOB:date})}
                    // placeholderText="15/08/1947"
                    // dateFormat="dd/MM/yyyy"
                    // className="rti-reporter-input-element"
                   
                    // showYearDropdown
                    // scrollableYearDropdown
      value={formData.DOB}
      onChange={(date) =>setFormData({...formData,DOB:date})}
      format="DD/MM/YYYY"
      maxDate={new Date()}              // prevents future dates
      minDate={new Date(1920, 0, 1)}   // realistic DOB minimum
      yearPicker                    
      placeholder="15/08/1947"
      inputClass="rti-reporter-input-element"
/>
        
        
        {errors.DOB&& <span style={{ color: "red" }}>{errors.DOB}</span>}

             <label className="rti-reporter-label-element">Select Your Gender:</label>

    <select value={formData.gender}  name="gender" className="rti-reporter-input-element" placeholder="Male/Female/Other" onChange={onhandleChangeActivist}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
  </select>
          {errors.gender && <span style={{ color: "red" }}>{errors.gender}</span>}

   <label className="rti-reporter-label-element">Enter Your Phone Number:</label>
     <input value={formData.phone} name="phone"  className="rti-reporter-input-element" type="tel"  placeholder="+91 98765 43210" onChange={onhandleChangeActivist}/>
      {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}

             <label className="rti-reporter-label-element">Enter Your Gmail:</label>
<input  value={formData.email} name="email" className="rti-reporter-input-element" type="email" placeholder="example@mail.com" onChange={onhandleChangeActivist}/>
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}

    
    <label className="rti-reporter-label-element">Enter Your Address:</label>
<input value={formData.address} name="address"  className="rti-reporter-input-element" type="text"  placeholder="123 Main St, City"  onChange={onhandleChangeActivist}/>
            {errors.address && <span style={{ color: "red" }}>{errors.address}</span>}

     <label className="rti-reporter-label-element">Enter Your Adhaar Number:</label>
      <input value={formData.aadhar} name="aadhar"  className="rti-reporter-input-element" type="text"  placeholder="1234 5678 9012"  maxLength="12" onChange={onhandleChangeActivist}/>
             {errors.aadhar && <span style={{ color: "red" }}>{errors.aadhar}</span>}

     <label className="rti-reporter-label-element">Upload Your Photo:</label>
    <input name="media"  className="rti-reporter-input-element" type="file"  accept="image/*" onChange={onhandleChangeActivist}/>
            {errors.media && <span style={{ color: "red" }}>{errors.media}</span>}

    {/* <label className="rti-reporter-label-element">Designation:</label>
    <input value={formData.designation}  name="designation" className="rti-reporter-input-element" type="text"  placeholder="Designation Eg..Activist"  onChange={onhandleChangeActivist}/>
   

    {errors.designation && <span style={{ color: "red" }}>{errors.designation}</span>} */}

      <label className="rti-reporter-label-element">Enter Your Pincode:</label>
    <input value={formData.pincode}  name="pincode"  className="rti-reporter-input-element" type="text"  placeholder="560001" onChange={onhandleChangeActivist}/>
             {errors.pincode && <span style={{ color: "red" }}>{errors.pincode}</span>}

     <label className="rti-reporter-label-element">Experience:</label>
    <input value={formData.experience}  name="experience" className="rti-reporter-input-element" type="text"  placeholder="Previous Experience If any like 3 years"  onChange={onhandleChangeActivist}/>
         {errors.experience && <span style={{ color: "red" }}>{errors.experience}</span>}

 <button type="submit" className="rti-reporter-submit-button">JOIN AS ACTIVIST</button>
{/* onClick={()=>setIsReporterModal(false)} */}
    </form> }
    </Modal> 
}

export default RTIActivistForm

// import { useContext, useState } from "react";
// import DatePicker from "react-datepicker";
// import Modal from "react-modal"
// import "react-datepicker/dist/react-datepicker.css";
// import ReporterActivistContext from "../../ReactContext";
// import "./index.css"
// Modal.setAppElement("#root");



// const RTIActivistForm=()=>{
//   const {isActivistModal,setIsActivistModal}=useContext(ReporterActivistContext)
//  const [dob,setDob]=useState(null)
//   // const {onClose,isOpen}=props
//     return <Modal 
//     isOpen={isActivistModal}
//     onRequestClose={()=>setIsActivistModal(false)}
//      contentLabel="Reporter Join Form"
//     className="modal-content"
//     overlayClassName="modal-overlay"
//     >
      
      
//       <form className="rti-reporter-form-container">
//         <h3 className="rti-reporter-heading">RTI ACTIVIST FORM</h3>





//        <label className="rti-reporter-label-element">Name:</label>
//         <input className="rti-reporter-input-element" type="text"  placeholder="John Doe"/>
//          <label className="rti-reporter-label-element">Select Your DOB:</label>
//           {/* <input className="rti-reporter-input-element" type="date"  placeholder="DD-MM-YYYY"/> */}
//         <DatePicker
//         id="dob"
//         selected={dob}
//         onChange={(date) => setDob(date)}
//         placeholderText="15/08/1947"
//         dateFormat="dd/MM/yyyy"
//         className="rti-reporter-input-element"
        
//         showYearDropdown
//         scrollableYearDropdown
//       />

//              <label className="rti-reporter-label-element">Select Your Gender:</label>

//     <select className="rti-reporter-input-element">
//         <option value="">Select gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//   </select>
//    <label className="rti-reporter-label-element">Enter Your Phone Number:</label>
//      <input  className="rti-reporter-input-element" type="tel"  placeholder="+91 98765 43210"/>
//              <label className="rti-reporter-label-element">Enter Your Gmail:</label>
// <input  className="rti-reporter-input-element" type="email" placeholder="example@mail.com"/>
//     <label className="rti-reporter-label-element">Enter Your Address:</label>
// <input  className="rti-reporter-input-element" type="text"  placeholder="123 Main St, City" />
//      <label className="rti-reporter-label-element">Enter Your Adhaar Number:</label>
//       <input  className="rti-reporter-input-element" type="text"  placeholder="1234 5678 9012"  maxLength="12"/>
//      <label className="rti-reporter-label-element">Upload Your Photo:</label>
//     <input  className="rti-reporter-input-element" type="file"  accept="image/*"/>
//     <label className="rti-reporter-label-element">Designation:</label>
//     <input  className="rti-reporter-input-element" type="text"  placeholder="Designation Eg..Activist" />
//      <label className="rti-reporter-label-element">Enter Your Pincode:</label>
//     <input  className="rti-reporter-input-element" type="text"  placeholder="560001" />
//      <label className="rti-reporter-label-element">Experience:</label>
//     <input  className="rti-reporter-input-element" type="text"  placeholder="Previous Experience If any like 3 years" />
// <button onClick={()=>setIsActivistModal(false)} type="submit" className="rti-reporter-submit-button">JOIN AS ACTIVIST</button>


//     </form> </Modal> 
// }

// export default RTIActivistForm