import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndianRupeeSign, faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import samsung from '../assets/images/samsungGs25.jpg';
import oppo from '../assets/images/omegaoppo.png';
import nothing from '../assets/images/Omeganothing.png';
import vivo from '../assets/images/OmegaVivo.jpg';

interface Product {
  id: number
  name: string
  price: string
  originalPrice: string
  discount: string
  image: string
}

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: 1,
      name: 'Vivo V50',
      price: '34,999',
      originalPrice: '42,000',
      discount: '19% OFF',
      image: vivo
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      price: '54,997',
      originalPrice: '69,999',
      discount: '21% OFF',
      image: samsung
    },
    {
      id: 3,
      name: 'Oppo F31 Pro + 5G',
      price: '32,999',
      originalPrice: '39,999',
      discount: '17% OFF',
      image: oppo
    },
    {
      id: 4,
      name: 'Nothing Phone ( 2a )',
      price: '23,999',
      originalPrice: '25,999',
      discount: '17% OFF',
      image: nothing
    }
  ]

  const showDetails = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <section id="products" className="products">
      <h2 className="products-title">Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price-container">
              <p className="original-price">
                <FontAwesomeIcon icon={faIndianRupeeSign} /> {product.originalPrice}
              </p>
              <p className="price">
                <FontAwesomeIcon icon={faIndianRupeeSign} /> {product.price}
              </p>
              <span className="discount">{product.discount}</span>
            </div>
            <button onClick={() => showDetails(product)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedProduct.name}</h3>
            <p className="price">
              <FontAwesomeIcon icon={faRupeeSign} /> {selectedProduct.price}
            </p>
            <p>Contact us for availability and detailed specifications.</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products