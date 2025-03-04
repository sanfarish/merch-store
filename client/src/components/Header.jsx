import useOpen from "../hooks/useOpen"

function Header() {
  const { setOpen } = useOpen()

  function handleMenu() {
    setOpen(prev => {
      return { ...prev, menu: true }
    })
  }

  function handleCart() {
    setOpen(prev => {
      return { ...prev, cart: !prev.cart }
    })
  }
  
  return (
    <header className="bg-orange-300 sticky top-0 flex justify-around items-center h-14">
      <input className="cursor-pointer" type="button" value="MENU" onClick={handleMenu} />
      <h1 className="text-4xl font-bold">Merch Store</h1>
      <input className="cursor-pointer" type="button" value="CART" onClick={handleCart} />
    </header>
  )
}

export default Header
