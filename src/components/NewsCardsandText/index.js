import newscardandtext from "../../newscardandtext.json"
import "./index.css"

const NewsCardsandText=()=>{
    return <div className="news-card-main-container">
        <ul className="news-card-text-container">
        <li className="news-card-text-list-item">ఆంధ్రప్రదేశ్ రాష్ట్ర రియల్ ఎస్టేట్ రంగానికి భారీ ఊరట..</li> 
        <li className="news-card-text-list-item">హార్ట్ స్ట్రోక్ తో హోంగార్డు మృతి... నివాళులు అర్పించిన ఏ.ఆర్ పోలీసు అధికారులు</li> 
        <li className="news-card-text-list-item">జిల్లా ఎస్పీ గారి ఆదేశాలతో అంత్యక్రియల ఖర్చుల కోసం రూ. 10 వేలు ఆర్థిక సాయం</li> 
        <li className="news-card-text-list-item">జిల్లాలో అర్హులైన ప్రతి పేదవానికి ఎన్టీఆర్ గృహ నిర్మాణ పథకం అందేలా చూడాలని జిల్లా జాయింట్ కలెక్టర్ అభిషేక్ కుమార్ అన్నారు.</li> 
        <li className="news-card-text-list-item">రూ. 19 లక్షల విలువ చేసే 19 ద్విచక్ర వాహనాలు, లగేజీ ఆటో స్వాధీనం</li> 
        {/* <li className="news-card-text-list-item">కరెంట్ ఆఫీస్ ముందు ... "అడ్డగోలుగా వెలుస్తున్న అక్రమ దుకాణాలు, హోటల్లు, ఫాస్ట్ ఫుడ్ సెంటర్లు-పట్టించుకోని అధికారులు</li>  */}
        {/* <li className="news-card-text-list-item">డ్రోన్లతో నిఘా వేసి మహిళలు, పిల్లల భద్రతే లక్ష్యంగా అంకితభావంతో పని చేయండి</li>  */}
        {/* <li className="news-card-text-list-item">*రాష్ట్ర గవర్నర్ జిల్లా పర్యటనకు పక్కా ఏర్పాట్లు చేయాలి –– జిల్లా ఇన్చార్జి కలెక్టర్ గీతాంజలి శర్మ</li>  */}
        </ul>
        <ul className="unordered-news-card-and-text-conatiner">
            {
                newscardandtext.slice(0,3).map((item,index)=>(
                    <li key ={index} className="list-item-card-news-text-and-container">
                       <img src={item.image} alt={`newscard ${index}`} className="news-card-text-image"/>
                       <p className="news-card-text">{item.text}</p>
                    </li>
                ))
            }
        </ul>

    </div>
}

export default NewsCardsandText