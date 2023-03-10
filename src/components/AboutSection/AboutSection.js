import React from 'react'
import './AboutSection.css'
import image from '../../images/vinyl.jpg'

function AboutSection() {
  return (
    <section className='about-section'>
      <img src={image} />

      <h2>THE LEADER IN INTERACTIVE MUSIC STUDIO EXPERIENCES</h2>

      <p>Lovesoul is a modern and innovative music studio that specializes in producing exceptional music projects for artists and companies globally. With a talented team of skilled musicians and producers, Lovesoul has created award-winning compositions that are powerful and captivating. The studio offers a full range of music services, including recording, mixing, mastering, and production. Equipped with state-of-the-art technology and equipment, Lovesoul creates music that is crisp, clear, and vibrant. Whether you are an aspiring artist or a global company looking for a unique sound to enhance your brand, Lovesoul is dedicated to bringing your vision to life with the power of music.</p>
    </section>
  )
}

export default AboutSection