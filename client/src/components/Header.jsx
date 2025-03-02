import { useState } from "react"
import Menu from "./Menu"
import useCart from "../hooks/useCart"

function Header() {
  const { setCart } = useCart()
  const [menuSwitch, setMenuSwitch] = useState(false)

  function handleMenu() {
    setMenuSwitch(!menuSwitch)
  }

  function handleCart() {
    setCart(prev => {
      return { ...prev, active: !prev.active }
    })
  }
  
  return (
    <header className="bg-orange-300 sticky top-0 flex justify-around items-center h-14">
      <input className="cursor-pointer" type="button" value="HOME" onClick={handleMenu} />
      <h1 className="text-4xl font-bold">Merch Store</h1>
      <input className="cursor-pointer" type="button" value="CART" onClick={handleCart} />
      {menuSwitch && <Menu />}
    </header>
  )
}

export default Header
