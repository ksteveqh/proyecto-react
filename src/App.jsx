import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        // console.log(data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.error("La peticion fallo")
      })
    // fetch("https://api.coincap.io/v2/assets")
    // fetch(`${import.meta.env.VITE_API_URL}assets`)
    // fetch(`${API_URL}assets`)
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setCriptos(data.data)
    //   })
    //   .catch(() => {
    //     console.error("La peticion fallo")
    //   })
  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { 
          criptos.map(({id, name, priceUsd}) => (
            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        )) 
        }
      </ol>
    </>
  )
  }

export default App
