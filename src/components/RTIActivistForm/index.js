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
        <h3>RTI ACTIVIST FORM</h3>
       
        <input className="rti-reporter-input-element" type="text"  placeholder="Enter Your Name.."/>
          <input className="rti-reporter-input-element" type="date"  placeholder="Enter Your DOB.."/>
    
    <select className="rti-reporter-input-element">
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
  </select>
    <input  className="rti-reporter-input-element" type="tel"  placeholder="Enter Your Phone Number.."/>
    <input  className="rti-reporter-input-element" type="email"  placeholder="Enter Your Your Email.." title="Enter a valid email address"/>
    <input  className="rti-reporter-input-element" type="text"  placeholder="Enter Your Your Address.." />
      <input  className="rti-reporter-input-element" type="text"  placeholder="Enter Your 12 digit Adhaar Number.."  maxLength="12"/>
    <input  className="rti-reporter-input-element" type="file"  accept="image/*"/>
    <input  className="rti-reporter-input-element" type="text"  placeholder="Designation Eg... Junior Reporter,Reporter,Senior Reporter" />
    <input  className="rti-reporter-input-element" type="text"  placeholder="Area Eg.. Hyderabad,Vizag,Amaravathi" />
    <input  className="rti-reporter-input-element" type="text"  placeholder="Previous Experience If any" />
<button onClick={onClose} type="submit" className="rti-reporter-submit-button">JOIN AS ACTIVIST</button>


    </form> </Modal> 
}

export default RTIActivistForm