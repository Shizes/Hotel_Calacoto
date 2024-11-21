import React from 'react'

interface DatosTestiProps {
    datos:{
        id: string;
        name: string;   
        avatar: string;
        coment: string;
        sentence:string;
    }

  
}

const DatosTesti = ({datos}:DatosTestiProps) => {
  return (
    <div><p></p>
    <img/>
    <h3></h3>
    <h5></h5>
    </div>
  )
}

export default DatosTesti