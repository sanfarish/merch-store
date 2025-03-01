// import { useEffect } from "react"
import useCart from "../hooks/useCart"

function Cart() {
  const { cart } = useCart()

  // useEffect(() => {
  //   console.log(document.getElementsByClassName("item-name").offsetWidth)
  //   if (document.getElementsByClassName("item-name").offsetWidth >= 1) {
  //     document.getElementByClassName("item-name").classList.add("animate-marquee")
  //     document.getElementByClassName("item-name").innerHTML += " " + document.getElementByClassName("item-name").innerHTML
  //   }
  // }, [])

  return (
    <section className="bg-gray-200 fixed top-0 right-0 h-full w-full sm:w-sm flex flex-col items-stretch gap-4 p-6 no-doc-scroll">
      <input className="bg-red-500 px-2 ml-auto" type="button" value="close X" />
      <ul className="flex flex-col gap-4 overflow-y-auto max-h-80">
        {cart.items.map(item => {
          return (
            <li key={item.id} className="flex gap-4">
              <img src={item.image} alt={item.name} className="h-fit w-full max-w-28" />
              <div className="grow flex flex-col items-start">
                <h3 className="text-lg">{item.name}</h3>
                <h4 className="text-lg">{"$ " + Number(item.price).toFixed(2)}</h4>
                <div className="flex items-center gap-1 border">
                  <input className="mx-1 px-1 cursor-pointer" type="button" value="-" />
                  <input className="w-8 text-center focus:outline-0" type="text" name="" id="" defaultValue={item.qty} />
                  <input className="mx-1 px-1 cursor-pointer" type="button" value="+" />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-between">
        <span className="text-xl">Subtotal:</span>
        <span className="text-xl">$ {Number(cart.subtotal).toFixed(2)}</span>
      </div>
      <input className="bg-orange-800 text-white p-2 rounded-md shadow-lg hover:bg-orange-600 cursor-pointer " type="button" value="Checkout" />
    </section>
  )
}

export default Cart
