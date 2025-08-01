import { useState } from "react"
import "./index.css"
const imran_image="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1753765458/IMG-20250719-WA0002_nzv4tj.jpg"
const baba_image="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1753765457/IMG-20250719-WA0001_tryp8f.jpg"
const naik_image="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1753765457/IMG-20250721-WA0011_wrtfag.jpg"
const shankar_image="https://res.cloudinary.com/dqdx0yz2t/image/upload/v1753765457/IMG-20250722-WA0019_vuoqop.jpg"
const AboutUs=()=>{

const [activeMember,setActivemember]=useState(null)

const toggleMember=(member)=>{
  setActivemember((prev)=>(prev===member)?null:member)
}

    return  <div className="aboutus-container">
    <h1 className="about-us-heading">About Us</h1>

    <div className="about-profile">
      <h2 onClick={()=>toggleMember('baba')}>1. Kotipalli Baba</h2>
      {activeMember==='baba'&&
      <div className="about-details">
        <div className="profile-header">
          <div className="text-info">
            <p className="aboutus-title">
              Chairman & Managing Director, RTI EXPRESS Group<br />
              Chief Editor, RTI EXPRESS News<br />
              Honourable President & Founder, Andhra Pradesh RTI Activist Organization
            </p>
            <p className="aboutus-contact">
              Contact: <a href="tel:+917668886666">76688 86666</a>
            </p>
            <p>
              Mr. Kotipalli Baba is a renowned RTI (Right to Information) Activist and seasoned journalist, widely respected
              for his relentless efforts in promoting transparency, accountability, and good governance across public and
              private sectors in India. With an unwavering commitment to the democratic values of truth and justice, he has
              empowered citizens through the power of information and fearless journalism.
            </p>
            <p>
              As the Chairman & Managing Director of RTI EXPRESS Group and Chief Editor of RTI EXPRESS News, Mr. Kotipalli
              Baba has led numerous investigative reports, exposed corruption, and championed the rights of the common
              people. Under his leadership, RTI Express has emerged as a credible voice in grassroots journalism and a
              powerful platform for social justice.
            </p>
            <p>
              Driven by a vision to create an informed and aware society, Mr. Kotipalli Baba has trained and inspired
              hundreds of young RTI activists and citizen journalists. His bold activism, ethical reporting, and commitment
              to truth have made a lasting impact on governance reforms and civic engagement.
            </p>
            <p>
              With over two decades of experience in public advocacy and media leadership, Mr. Kotipalli Baba continues to
              be a torchbearer of journalistic integrity and a leading figure in the RTI movement in India.
            </p>
          </div>
          <img src={baba_image} alt="Kotipalli Baba" className="profile-image" />
        </div>
      </div>
}
    </div>

    <div className="about-profile">
      <h2 onClick={()=>toggleMember("naik")}>2. S. Ramachandra Naik</h2>
      {activeMember==="naik"&&
      <div className="about-details">
        <div className="profile-header">
          <div className="text-info">
            <p className="aboutus-title">
              Associate Editor, RTI EXPRESS News<br />
              State General Secretary, Andhra Pradesh RTI Activist Organization
            </p>
            <p className="aboutus-contact">
              Contact: <a href="tel:+918919831001">89198 31001</a>
            </p>
            <p>
              Mr. S. Ramachandra Naik is a dynamic and committed RTI (Right to Information) activist with a strong track
              record in promoting transparency, accountability, and good governance. He currently serves as the Associate
              Editor of RTI EXPRESS News, where his sharp editorial insight and investigative spirit contribute
              significantly to the newspaper’s mission of public interest journalism.
            </p>
            <p>
              As the State General Secretary of the Andhra Pradesh RTI Activist Organization, Mr. Ramachandra Naik plays a
              crucial leadership role in guiding the Organization’s initiatives across the state. His unwavering dedication
              has empowered citizens to seek truth and justice through the use of RTI, especially in rural and marginalized
              communities.
            </p>
            <p>
              A respected Lokayukta promoter, Mr. Ramachandra Naik has been instrumental in promoting institutional
              integrity and anti-corruption mechanisms in public administration. With a reputation for fearless activism and
              a deep understanding of legal and civic rights, Mr. S. Ramachandra Naik continues to be a voice for the
              voiceless and a catalyst for reform in Andhra Pradesh.
            </p>
            <p>
              His contributions to RTI-based journalism and social activism have made a significant impact on the lives of
              many, inspiring a new generation of activists and journalists to uphold the values of truth, justice, and
              public service.
            </p>
          </div>
          <img src={naik_image} alt="S. Ramachandra Naik" className="profile-image" />
        </div>
      </div>
}
    </div>

    <div className="about-profile">
      <h2 onClick={()=>toggleMember("ali")}>3. Dr. M. Imran Ali Khan</h2>
      {activeMember==="ali"&&
      <div className="about-details">
        <div className="profile-header">
          <div className="text-info">
            <p className="aboutus-title">
              Associate Editor – National News Reporter<br />
              State President – Andhra Pradesh RTI Activist Organization
            </p>
            <p className="aboutus-contact">
              Contact: <a href="tel:+918549844535">85498 44535</a>
            </p>
            <p>
              Dr. M. Imran Ali Khan is a respected and dynamic figure in the fields of journalism, social service, and Right
              to Information (RTI) activism. Serving as the Associate Editor of National News Reporter, he plays a vital
              role in upholding journalistic integrity and bringing critical issues to the forefront.
            </p>
            <p>
              As the State President of the Andhra Pradesh RTI Activist Organization, Dr. M. Imran Ali Khan has been at the
              forefront of transparency and accountability movements, empowering citizens with information and promoting
              good governance.
            </p>
            <p>
              Widely recognized for his unwavering commitment to public service, he is also a devoted social worker whose
              efforts have made a positive impact on many communities across the state. His dedication, leadership, and
              strong voice for justice continue to inspire many in the spheres of activism, journalism, and civil rights.
            </p>
          </div>
          <img src={imran_image} alt="Dr. M. Imran Ali Khan" className="profile-image" />
        </div>
      </div>
}
    </div>

    <div className="about-profile">
      <h2 onClick={()=>toggleMember("shankar")}>4. D. SivaShankar</h2>
      {activeMember==="shankar"&&
      <div className="about-details">
        <div className="profile-header">
          <div className="text-info">
            <p className="aboutus-title">
              Chief Legal Advisor – RTI EXPRESS Group<br />
              State President (Legal Cell) – Andhra Pradesh RTI Activist Organization<br />
              Renowned Advocate | Legal Strategist | RTI Movement Supporter
            </p>
            <p className="aboutus-contact">
              Contact: Not Mentioned
            </p>
            <p>
              Mr. D. Siva Shankar is a distinguished legal professional and well-known advocate, currently serving as the
              Chief Legal Advisor of RTI Express Group and the State President of the Legal Cell, Andhra Pradesh RTI
              Activist Organization.
            </p>
            <p>
              With deep expertise in legal affairs and an unwavering commitment to justice, he plays a pivotal role in
              supporting RTI-based journalism and legal activism. His guidance ensures the lawful and ethical functioning
              of the RTI Express Group, empowering its mission to expose truth and uphold democratic values.
            </p>
            <p>
              As State President of the Legal Cell, he actively leads legal awareness campaigns and provides legal support
              to RTI activists across Andhra Pradesh. His strategic insights and dedication have strengthened the fight for
              transparency, accountability, and public rights.
            </p>
            <p>
              Respected for his integrity, legal knowledge, and social responsibility, Mr. D. Siva Shankar stands as a
              pivotal name in the RTI movement and continues to be an inspiration to many aspiring legal professionals and
              activists.
            </p>
          </div>
          <img src={shankar_image} alt="D. SivaShankar" className="profile-image" />
        </div>
      </div>
}</div>
    
  </div>

}

export default AboutUs