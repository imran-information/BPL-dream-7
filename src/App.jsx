import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'


function App() {
  const [toggle, setToggle] = useState(true)
  const [claimCoin, setClaimCoin] = useState(0)
  const [selectedPlayers, setSelectedPlayers] = useState([])


  const handleRemovePlayer = (pla, notifyPlayerRemove) => {
    const remove = selectedPlayers.filter(pID => pID.id !== pla.id);
    setSelectedPlayers(remove)
    setClaimCoin(claimCoin + pla.price)
    notifyPlayerRemove()


  }

  const handleSelectedPlayer = (player, notify, notifyWarning, notifyAlradyAddWarning, notifyAlready6Players) => {
    const alredyAddPlayer = selectedPlayers.find(newPlayer => newPlayer.id == player.id)
    if (claimCoin >= player.price) {
      if (alredyAddPlayer) {
        notifyAlradyAddWarning()
      }
      else {
        if (selectedPlayers.length == 6) {
          notifyAlready6Players()

        }
        else {
          const newPlayers = [...selectedPlayers, player]
          setSelectedPlayers(newPlayers)
          // notify()
          setClaimCoin(claimCoin - player.price)
        }
      }
    }
    else {
      notifyWarning()
    }
  }


  const handleClaimCoin = (coin, notify1) => {
    setClaimCoin(claimCoin + coin)
    // notify1()

  }



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
      <Navbar claimCoin={claimCoin}></Navbar>
      <Header handleClaimCoin={handleClaimCoin}></Header>
      <main className='w-10/12 mx-auto'>
        <Players handleRemovePlayer={handleRemovePlayer} selectedPlayers={selectedPlayers} handleSelectedPlayer={handleSelectedPlayer} toggle={toggle} handleToggleBtn={handleToggleBtn}></Players>
      </main>
      <Subscribe className=""></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
