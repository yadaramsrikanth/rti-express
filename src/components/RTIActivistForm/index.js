import React from "react";

import Modal from "react-modal"
import "react-datepicker/dist/react-datepicker.css";
import "./index.css"
Modal.setAppElement("#root");


const RTIActivistForm=(props)=>{
 
  const {onClose,isOpen}=props
    return <Modal 
    isOpen={isOpen}
    onRequestClose={onClose}
     contentLabel="Reporter Join Form"
    className="modal-content"
    overlayClassName="modal-overlay"
    >
      
      
      <form className="rti-reporter-form-container">
        <h3 className="rti-reporter-heading">RTI ACTIVIST FORM</h3>
       <label className="rti-reporter-label-element">Name:</label>
        <input className="rti-reporter-input-element" type="text"  placeholder="John Doe"/>
         <label className="rti-reporter-label-element">Select Your DOB:</label>
          <input className="rti-reporter-input-element" type="date"  placeholder="DD-MM-YYYY"/>
             
             <label className="rti-reporter-label-element">Select Your Gender:</label>

    <select className="rti-reporter-input-element" placeholder="Male/Female/Other">
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
  </select>
   <label className="rti-reporter-label-element">Enter Your Phone Number:</label>
     <input  className="rti-reporter-input-element" type="tel"  placeholder="+91 98765 43210"/>
             <label className="rti-reporter-label-element">Enter Your Gmail:</label>
<input  className="rti-reporter-input-element" type="email" placeholder="example@mail.com"/>
    <label className="rti-reporter-label-element">Enter Your Address:</label>
<input  className="rti-reporter-input-element" type="text"  placeholder="123 Main St, City" />
     <label className="rti-reporter-label-element">Enter Your Adhaar Number:</label>
      <input  className="rti-reporter-input-element" type="text"  placeholder="1234 5678 9012"  maxLength="12"/>
     <label className="rti-reporter-label-element">Upload Your Photo:</label>
    <input  className="rti-reporter-input-element" type="file"  accept="image/*"/>
    <label className="rti-reporter-label-element">Designation:</label>
    <input  className="rti-reporter-input-element" type="text"  placeholder="Designation Eg... Junior Reporter,Reporter,Senior Reporter" />
     <label className="rti-reporter-label-element">Enter Your Address/pincode:</label>
    <input  className="rti-reporter-input-element" type="text"  placeholder="Area Eg.. Hyderabad,Vizag,Amaravathi" />
     <label className="rti-reporter-label-element">Experience:</label>
    <input  className="rti-reporter-input-element" type="text"  placeholder="Previous Experience If any like 3 years" />
<button onClick={onClose} type="submit" className="rti-reporter-submit-button">JOIN AS ACTIVIST</button>


    </form> </Modal> 
}

export default RTIActivistForm