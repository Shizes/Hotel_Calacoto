import React from 'react'

interface ServiProps {
  servi: {
    id: string;
    name: string;
    image: string;
  };
}

const Servi = ({servi}:ServiProps) => {
  return (
    <div><img src={servi.image} alt="" />
    <h2>{servi.name}</h2>
    </div>
  )
}

export default Servi