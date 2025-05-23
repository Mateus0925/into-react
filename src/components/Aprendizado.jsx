import React from 'react'
import "./aprendizado.css"


const aprendizado = (prop) => {
  return (
    <>
      <h1 style={{color:prop.cor}}>{prop.texto}</h1>
    </>
  )
}
/*
const aprendizado2 = ({cor, texto})=> {
    return (
      <>
        <h1 style={{color:cor}}>{texto}</h1>
      </>
    )
  }

export default Aprendizado2
*/


export default aprendizado
