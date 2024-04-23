import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/images/logo.png'
import instagramIcon from '../Assets/icons/instagram_icon.png'
import pinterestIcon from '../Assets/icons/pinterest_icon.png'
import twitterIcon from '../Assets/icons/twitter_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>Vintage Fits</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagramIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img className='twitter' src={twitterIcon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}
