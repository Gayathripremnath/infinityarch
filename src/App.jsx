import { Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Component/Home'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App