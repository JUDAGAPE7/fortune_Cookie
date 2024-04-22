import quotes from './data/phrases.json'
import { useState } from 'react'
import './App.css'
import getRandomNumber from './services/getRandomNumber'
import Phrase from './components/Phrase'
import BtnPhrase from './components/BtnPhrase'
import photos from './data/photos.json'

function App() { 

const indexRamdom = getRandomNumber(quotes.length)
  
const [phraseSelected, setPhraseSelected] = useState(quotes[indexRamdom]) 

const [bgSelected, setbgSelected] = useState(photos[getRandomNumber(photos.length)])

const objStyle = {
  backgroundImage: `url(/images/fondo${bgSelected}.jpg)`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  // backgroundRepeat: 'no-repeat',
  height: '100vh',
  width: '100vw',
  flexditection: 'colum',

}

  return (
<div className='main'  style={objStyle}>
<h1>Galleta de la Fortuna</h1>
<Phrase className="frase" phraseSelected = {phraseSelected}  
/> 

<BtnPhrase className="button-change-cita"  setPhraseSelected = {setPhraseSelected} 
             setbgSelected = { setbgSelected}
/>

  </div>
  )
}

export default App
