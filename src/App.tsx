import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App