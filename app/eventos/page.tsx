import React from 'react'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import PortadaEventos from '../../components/PortadaEventos'
import ApiEvents from '../../components/ApiEvents'


const eventos = () => {
  return (
    <div>
      <Navbar/>
      <PortadaEventos/>
      <ApiEvents/>
      <Footer/>
    </div>
  )
}

export default eventos