import Modal from "react-modal"

import "./index.css"
Modal.setAppElement("#root");

const CitizenVoice=(props)=>{

    const {isOpen,onClose}=props
    return <Modal isOpen={isOpen}
     onRequestClose={onClose}  
    contentLabel="Citizen Voice"
    className="citizen-modal-content"
    overlayClassName="citizen-voice-modal-overlay">
        <p className="citizen-voice-para">Grievances are now being taken only from the app.</p>
       <img className="google-play-icon" src="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1758023828/astana-kazakhstan-july-google-play-icon-logo-vector-symbol-198641988_m6ozms.webp" alt="play-icon"/>
    </Modal>
}

export default CitizenVoice
