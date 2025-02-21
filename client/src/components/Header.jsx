import { useState } from "react"
import Menu from "./Menu"
import Cart from "./Cart"

function Header() {
  const [cartSwitch, setCartSwitch] = useState(false)
  const [menuSwitch, setMenuSwitch] = useState(false)

  function handleMenu(e) {
    e.preventDefault()
    setMenuSwitch(!menuSwitch)
  }

  function handleCart(e) {
    e.preventDefault()
    setCartSwitch(!cartSwitch)
  }
  
  return (
    <header className="bg-orange-300 flex justify-around items-center h-14">
      <input className="cursor-pointer" type="button" value="HOME" onClick={handleMenu} />
      <h1 className="text-4xl">Merch Store</h1>
      <input className="cursor-pointer" type="button" value="CART" onClick={handleCart} />
      {menuSwitch && <Menu />}
      {cartSwitch && <Cart />}
    </header>
  )
}

export default Header
