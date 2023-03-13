import React from 'react'
import './Footer.css'
import facebook from '../../images/icons/icon-facebook.svg'
import instagram from '../../images/icons/icon-instagram.svg'
import pinterest from '../../images/icons/icon-pinterest.svg'
import twitter from '../../images/icons/icon-twitter.svg'

function Footer() {
  return (
    <footer>
      <div className="left-container">
      <p className="logo">LoveSoul</p>
      <div className="footer-links">
        <a href="/">about</a>
        <a href="/">careers</a>
        <a href="/">events</a>
        <a href="/">products</a>
        <a href="/">support</a>
      </div>
    </div>
    <div className="right-container">
      <div className="social-links">
        <a href="/"><img src={facebook} alt="icon-facebook" /></a>
        <a href="/"><img src={twitter} alt="icon-twitter" /></a>
        <a href="/"><img src={pinterest} alt="icon-pinterest" /></a>
        <a href="/"><img src={instagram} alt="icon-instagram" /></a>
      </div>
      <p>© 2021 Lovesoul. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer