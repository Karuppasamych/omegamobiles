import banImage from '../assets/images/omegamobiles.png'
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-banner">
        <img 
          src={banImage} 
          alt="Mobile phones banner" 
          className="banner-image"
        />
        <div className="hero-overlay">
          {/* <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=150&fit=crop&crop=center" 
            alt="Featured phone" 
            className="overlay-image"
          /> */}
          <h2>Latest Smartphones at Best Prices</h2>
          <p>Discover premium mobile phones with warranty and support</p>
        </div>
        {/* <div className="hero-content">
          <img src={OmegaEMI} />
        </div> */}
      </div>
    </section>
  )
}

export default Hero