import useCart from "../hooks/useCart"

function Cart() {
  const { cart, setCart } = useCart()

  function handleClose() {
    setCart(prev => {
      return {
        ...prev,
        active: false
      }
    })
  }

  return (
    <section className="bg-gray-200 fixed top-0 right-0 h-full w-full sm:w-sm flex flex-col gap-4 p-4 sm:p-6 no-doc-scroll">
      <input className="px-2 ml-auto border-1 border-gray-400 cursor-pointer" type="button" value="close X" onClick={handleClose} />
      <ul className="flex flex-col gap-4 overflow-y-auto max-h-96">
        {cart.items.map(item => {
          return (
            <li key={item.id} className="flex gap-4">
              <a href="#" className="h-fit w-full max-w-20 sm:max-w-24">
                <img src={item.image} alt={item.name} />
              </a>
              <div className="grow flex flex-col justify-between truncate">
                <a href="#" className="truncate w-full">
                  <span className="font-medium sm:text-lg hover:underline">{item.name}</span>
                </a>
                <div className="flex justify-between w-full pr-2">
                  <span className="sm:text-lg">{"$ " + Number(item.price).toFixed(2)}</span>
                  <div className="flex items-center gap-1 border border-gray-400">
                    <input className="ml-1 px-1 cursor-pointer" type="button" value="-" />
                    <input className="w-8 text-center focus:outline-0" type="text" name="" id="" defaultValue={item.qty} />
                    <input className="mr-1 px-1 cursor-pointer" type="button" value="+" />
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span className="text-xl">Subtotal:</span>
          <span className="text-xl">$ {Number(cart.subtotal).toFixed(2)}</span>
        </div>
        <span className="text-gray-600">Tax and shipping not included.</span>
      </div>
      <input className="bg-orange-600 text-white p-2 rounded-md shadow-lg hover:bg-orange-700 active:bg-orange-800 cursor-pointer" type="button" value="Checkout" />
    </section>
  )
}

export default Cart
