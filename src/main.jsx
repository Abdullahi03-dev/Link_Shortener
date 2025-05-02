import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx'
import Banner from './Banner.jsx'
import Searchdiv from './searchDiv.jsx'
import Features from './Features.jsx'
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar />
   <Banner />
   <Searchdiv />
   <Features/>
   <Footer />
  </StrictMode>,
)
