import React from 'react'

function NovoTeste() {
  const filmes =['Vingadores', 'Batman', 'Amor de redenção']
  
  return (
    <ul>
      {filmes.map((filme)=>{
        <li key={filme}>:{filme}</li>
      })}
    </ul>
  )
}

export default NovoTeste
