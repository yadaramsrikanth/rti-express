import "./Header.css"

const Header=(props)=>{
    const {isON}=props
  const categories=isON ? [ "Telangana",
  "Andhra Pradesh",
  "National",
  "Cinema",
  "Ideals",
  "Cultural",
  "Business",
  "Editorial",
  "Sports"]:
  [ "తెలంగాణ",
  "ఆంధ్రప్రదేశ్",
  "జాతీయం",
  "సినిమా",
  "ఆదర్శం",
  "సాంస్కృతికం",
  "బిజినెస్",
  "లొగొట్టు సంపాదకీయం",
  "క్రీడలు"]
  console.log(categories)
    return <div className="Header-container">
        <p className="text" id="home">{categories[0]}</p>
        <p className="text" id="home">{categories[1]}</p>
        <p className="text" id="home">{categories[2]}</p>
        <p className="text" id="home">{categories[3]}</p>
        <p className="text" id="home">{categories[4]}</p>
        <p className="text" id="home">{categories[5]}</p>
        <p className="text" id="home">{categories[6]}</p>
        <p className="text" id="home">{categories[7]}</p>
        <p className="text" id="home">{categories[8]}</p>
        <p className="text" id="home">Contact Us</p>
       
    </div>
}

export default Header