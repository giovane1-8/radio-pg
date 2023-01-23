import { useState } from 'react'
import "./App.css"
import axios from "axios"

function App() {
  

  return (
    <>
      <label>
        Assunto:
        <input type="text" id='' />
      </label>
      <br />
      <label>
        Corpo:
        <textarea />
      </label><br />
      <button onClick={() => { }}>Enviar</button>
    </>
  )
}

export default App
