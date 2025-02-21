
function Menu() {
  const menuContent = [ "Shop", "Privacy Policy", "Lorem, ipsum." ]
  
  return (
    <section className="bg-gray-200 flex flex-col gap-4 p-6 fixed top-14 left-0 h-full w-full sm:w-sm">
      <ul className="flex flex-col gap-4">
        {menuContent.map(item => {
          return (
            // <li key={item} className="text-lg hover:underline cursor-pointer">{item}</li> altenative to the next line
            <li key={item}><input className="text-lg hover:underline cursor-pointer" type="button" value={item} /></li>
          )
        })}
      </ul>
    </section>
  )
}

export default Menu
