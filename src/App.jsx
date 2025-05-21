import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Section from './Components/Section'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  )
}

export default App
