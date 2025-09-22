import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import OmegaEMI from '../assets/images/OmegaEMI.jpg'
import BajajEMI from '../assets/images/OmegaBajajEMI.png'
import OmegaAuth from '../assets/images/omegaAuthorised.png'

const Contact = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [OmegaEMI, BajajEMI, OmegaAuth]
  const imageLabels = ['EMI Options', 'Bajaj EMI', 'Authorized Dealer']

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>📍 No:1 Main Road, Bus Stand Entrance, Puliyangudi, Tenkasi - 627855.</p>
          <p>📞 Office: +91 9042535056</p>
          <p>📞 Manager: +91 7603841350</p>
          <p>✉️ sales@omegamobiles.com</p>
          <p>🕒 Mon-Sat: 9AM-9:30PM</p>
        </div>
        <div className="contact-image">
          <div className="image-carousel">
            <button className="carousel-btn prev-btn" onClick={prevImage}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img 
              src={images[currentImage]} 
              alt={imageLabels[currentImage]} 
              className="emi-image active"
            />
            <button className="carousel-btn next-btn" onClick={nextImage}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact