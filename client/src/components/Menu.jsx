import useOpen from "../hooks/useOpen"

function Menu() {
  const { setOpen } = useOpen()

  function handleMenu() {
    setOpen(prev => {
      return { ...prev, menu: !prev.menu }
    })
  }
  
  return (
    <section className="bg-gray-200 fixed top-0 left-0 h-full w-full sm:w-sm flex flex-col gap-4 p-4 sm:p-6 no-doc-scroll">
      <input type="button" value="close X" onClick={handleMenu} className="border-1 border-gray-400 cursor-pointer mr-auto px-2" />
      <ul className="flex flex-col gap-4">
        <li>
          <a href="#" className="ml-6 text-lg hover:underline">Shop</a>
        </li>
        <li>
          <a href="#" className="ml-6 text-lg hover:underline">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="ml-6 text-lg hover:underline">Contact Us</a>
        </li>
      </ul>
    </section>
  )
}

export default Menu
