import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

function App() {
  const [toggle, setToggle] = useState(true)
  console.log(toggle);

  const handleToggleBtn = (selectedBtn) => {
    if (selectedBtn == 'available') {
      setToggle(true)
    }
    else {
      setToggle(false)
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <main className='w-10/12 mx-auto'>
        <Players toggle={toggle} handleToggleBtn={handleToggleBtn}></Players>
      </main>
      <Subscribe className=""></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
