
import "./index.css"

const ContactUs=()=>{


const handleSumbitContactUs=(e)=>{
    e.preventDefault()
    alert("Thank you! Your message has been submitted.")
    e.target.reset()
}    

    return <div>
    <div class="map-container">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.452181043032!2d77.5946!3d13.8277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e8dbed9c4c23%3A0x6ad1f88e278b6882!2sVasavi%20Dharmashala%2C%20Hindupur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000" 
      allowfullscreen="" 
      loading="lazy"
      title="Map showing Vasavi Dharmashala in Hindupur, Andhra Pradesh"
    ></iframe>
  </div>

  
  <section class="contact-section">
   
    <div class="contact-info">
      <h2>Contact Us</h2>
      <p><span>RTI EXPRESS STATE OFFICE</span></p>
      <p>#7-2-28, Near Indian Gas,</p>
      <p>Vasavi Dharmashala Road,</p>
      <p>Hindupur, Sri Sathya Sai District,</p>
      <p>Andhra Pradesh – 515201</p>
      <p><span>Contact:</span> 76688 86666, 90596 79786</p>
      <p><span>Email:</span> contact@rtiexpress.in</p>
    </div>

      <div class="contact-form">
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSumbitContactUs}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea name="message" rows="5" placeholder="Your Message..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
</div> 
}


export default ContactUs