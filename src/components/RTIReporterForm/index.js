import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import Modal from "react-modal"
import "react-datepicker/dist/react-datepicker.css";
import ReporterActivistContext from "../../ReactContext";
import "./index.css"
Modal.setAppElement("#root");


const RTIReporterForm=()=>{
  const {isReporterModal,setIsReporterModal}=useContext(ReporterActivistContext)
 const [reporterdob,setReporterDob]=useState(null)
 const [formData,setFormData]=useState({name:"kkkkkk",})
  // const {onClose,isOpen}=props
const submitReporterForm=async (event)=>{
  event.preventDefault()
  const reporterUrl="http://34.100.231.173:3000/api/v1/reporter/application"
  const options={method:"POST",
     headers: {
    'Content-Type': 'application/json',
  },
  body:JSON.stringify({formData})
  }
  const data= await fetch(reporterUrl,options)
  const responseData=await data.json()
  console.log(responseData)
  setFormData("kkkkk")
}


    return <Modal 
    isOpen={isReporterModal}
    onRequestClose={()=>setIsReporterModal(false)}
     contentLabel="Reporter Join Form"
    className="modal-content"
    overlayClassName="modal-overlay"
    >
      
      
      <form className="rti-reporter-form-container" onSubmit={submitReporterForm}>
        <h3 className="rti-reporter-heading">RTI REPORTER FORM</h3>
       <label className="rti-reporter-label-element">Name:</label>
        <input name="name" className="rti-reporter-input-element" type="text"  placeholder="John Doe"/>
         <label className="rti-reporter-label-element">Select Your DOB:</label>
          {/* <input className="rti-reporter-input-element" type="date"  placeholder="DD-MM-YYYY"/> */}
               <DatePicker
                    id="dob"
                    selected={reporterdob}
                    onChange={(date) => setReporterDob(date)}
                    placeholderText="15/08/1947"
                    dateFormat="dd/MM/yyyy"
                    className="rti-reporter-input-element"
                    name="dob"
                    showYearDropdown
                    scrollableYearDropdown
                  />

             <label className="rti-reporter-label-element">Select Your Gender:</label>

    <select  name="gender" className="rti-reporter-input-element" placeholder="Male/Female/Other">
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
  </select>
   <label className="rti-reporter-label-element">Enter Your Phone Number:</label>
     <input name="number"  className="rti-reporter-input-element" type="tel"  placeholder="+91 98765 43210"/>
             <label className="rti-reporter-label-element">Enter Your Gmail:</label>
<input name="email" className="rti-reporter-input-element" type="email" placeholder="example@mail.com"/>
    <label className="rti-reporter-label-element">Enter Your Address:</label>
<input name="address"  className="rti-reporter-input-element" type="text"  placeholder="123 Main St, City" />
     <label className="rti-reporter-label-element">Enter Your Adhaar Number:</label>
      <input name="adhaar"  className="rti-reporter-input-element" type="text"  placeholder="1234 5678 9012"  maxLength="12"/>
     <label className="rti-reporter-label-element">Upload Your Photo:</label>
    <input name="image"  className="rti-reporter-input-element" type="file"  accept="image/*"/>
    <label className="rti-reporter-label-element">Designation:</label>
    <input name="dsignation" className="rti-reporter-input-element" type="text"  placeholder="Designation Eg... Junior Reporter,Reporter,Senior Reporter" />
     <label className="rti-reporter-label-element">Enter Your Pincode:</label>
    <input name="pincode"  className="rti-reporter-input-element" type="text"  placeholder="560001" />
     <label className="rti-reporter-label-element">Experience:</label>
    <input name="experience" className="rti-reporter-input-element" type="text"  placeholder="Previous Experience If any like 3 years" />
<button onClick={()=>setIsReporterModal(false)} type="submit" className="rti-reporter-submit-button">JOIN AS REPORTER</button>


    </form> </Modal> 
}

export default RTIReporterForm