import './Hero.css'
import arrowIcon from '../Assets/icons/arrow.png'
import heroImage from '../Assets/images/heroImage.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <p>new</p>
        <p>collections</p>
        <p className='hero-everyone'>for everyone</p>
        <div className="hero-latest-button">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
