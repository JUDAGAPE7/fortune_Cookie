import quotes from "../data/phrases.json"
import getRandomNumber from "../services/getRandomNumber" 
import photos from '../data/photos.json'


const BtnPhrase = ({ setPhraseSelected, setbgSelected}) => { 

    const changePhrase = () => {
     const indexRandom =  getRandomNumber(quotes.length)
     const phaseRandom = quotes[indexRandom]
     setPhraseSelected(phaseRandom)  
     setbgSelected(photos[getRandomNumber(photos.length)])
    }

  return ( 
    <button onClick={changePhrase} >Ver Otra</button>
  )
}

export default BtnPhrase
