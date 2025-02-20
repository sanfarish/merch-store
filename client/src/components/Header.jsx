import { useState } from "react"
import Cart from "./Cart"

function Header() {
  const [cartSwitch, setCartSwitch] = useState(false)

  function handleCart(e) {
    e.preventDefault()
    setCartSwitch(!cartSwitch)
  }
  
  return (
    <header className="bg-orange-300 flex justify-around items-center h-14">
      <div>MENU</div>
      <h1 className="text-4xl">Merch Store</h1>
      <input className="cursor-pointer" type="button" value="CART" onClick={handleCart} />
      {cartSwitch && <Cart />}
    </header>
  )
}

export default Header
