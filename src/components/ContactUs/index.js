
import "./index.css"

const ContactUs=()=>{


const handleSumbitContactUs=(e)=>{
    e.preventDefault()
    alert("Thank you! Your message has been submitted.")
    e.target.reset()
}    

    return <div>
    <div className="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.184272287748!2d77.4935125!3d13.8279709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a3a2e57f40a3%3A0x264ad7979065d9d8!2sNew%20sarathi%20digital%20printers!5e0!3m2!1sen!2sin!4v1754321556574!5m2!1sen!2sin"
      allowfullscreen="" 
      loading="lazy"
      title="Map showing Vasavi Dharmashala in Hindupur, Andhra Pradesh"
    ></iframe>
  </div>

  
  <section className="contact-section">
   
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p><span>RTI EXPRESS CORPORATE OFFICE</span></p>
      <p>For any inquiries, advertisements or complaints, please feel free to contact us.</p>
      <p>#7-2-28, Near Indian Gas,</p>
      <p>Vasavi Dharmashala Road,</p>
      <p>Hindupur, Sri Sathya Sai District,</p>
      <p>Andhra Pradesh – 515201</p>
      <p><span>Contact:</span> +9176688 86666, +9190596 79786</p>
      <p><span>Email:</span> contact@rtiexpress.in</p>
    </div>

      <div className="contact-form">
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