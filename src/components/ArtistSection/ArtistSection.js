import React from 'react'
import './ArtistSection.css'
import kendall from '../../images/artist/kendall.png'
import fernanda from '../../images/artist/fernanda.png'
import ray from '../../images/artist/ray.png'
import jack from '../../images/artist/jack.png'
import mike from '../../images/artist/mike.png'
import alex from '../../images/artist/alex.png'

function ArtistSection() {
  return (
    <section className='artist-section'>
        <h2>our artist</h2>

        <img className='img-container' src={kendall} alt="kendall" />
        <img className='img-container' src={fernanda} alt="fernanda" />
        <img className='img-container' src={ray} alt="ray" />
        <img className='img-container' src={jack} alt="jack" />
        <img className='img-container' src={mike} alt="mike"/>
        <img className='img-container' src={alex} alt="alex"/>
    </section>
  )
}

export default ArtistSection