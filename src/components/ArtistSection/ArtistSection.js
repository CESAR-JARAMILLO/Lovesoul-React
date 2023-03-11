import React from 'react'
import kendall from '../../images/artist/kendall.png'
import fernanda from '../../images/artist/fernanda.png'
import ray from '../../images/artist/ray.png'
import jack from '../../images/artist/jack.png'
import mike from '../../images/artist/mike.png'
import alex from '../../images/artist/alex.png'

function ArtistSection() {
  return (
    <section className='artist-section'>
        <img src={kendall} alt="kendall" />
        <img src={fernanda} alt="fernanda" />
        <img src={ray} alt="ray" />
        <img src={jack} alt="jack" />
        <img src={mike} alt="mike"/>
        <img src={alex} alt="alex"/>
    </section>
  )
}

export default ArtistSection