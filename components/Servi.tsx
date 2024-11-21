import React from 'react'
import "./Servi.css"

interface ServiProps {
  servi: {
    id: string;
    name: string;
    image: string;
  };
}

const Servi = ({servi}:ServiProps) => {
  return (
    <section className='servicios'>
    <div><img src={servi.image} alt="" />
    <h2>{servi.name}</h2>
    </div>
    </section>
  )
}

export default Servi