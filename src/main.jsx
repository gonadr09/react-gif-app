import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)


// const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);