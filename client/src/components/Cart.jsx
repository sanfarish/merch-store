import sample from "../assets/sample.png"

function Cart() {
  const cart = [
    { id: 1, name: "Vinyl", price: 40, img: "assets/sample.png", qty: 1 },
    { id: 2, name: "Digital Album Best If Needed", price: 20, img: "assets/sample.png", qty: 1 },
  ]

  return (
    <section className="bg-gray-200 flex flex-col gap-4 p-6 fixed top-14 right-0 h-full w-full sm:w-sm">
      <ul className="flex flex-col gap-4 overflow-y-auto max-h-96">
        {cart.map(item => {
          return (
            <li key={item.id} className="flex gap-4 items-center">
              <img src={sample} alt={item.name} className="w-20" />
              <div>
                <div className="truncate w-36 sm:w-52">
                  {item.name.length > 20
                  ? <h3 className="w-fit text-xl animate-marquee">{item.name} {item.name}</h3>
                  : <h3 className="w-fit text-xl">{item.name}</h3>}
                </div>
                <h4 className="text-lg">{"$ " + item.price + ",00"}</h4>
                <div className="inline-block border">
                  <input className="mx-1 px-1 cursor-pointer" type="button" value="-" />
                  <input className="w-8 text-center focus:outline-1" type="text" name="" id="" defaultValue={1} />
                  <input className="mx-1 px-1 cursor-pointer" type="button" value="+" />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-around">
        <h3 className="text-xl">Total:</h3>
        <h3 className="text-xl">$ 200,00</h3>
      </div>
      <input className="bg-orange-800 text-white p-2 rounded-md shadow-lg hover:bg-orange-600 cursor-pointer " type="button" value="Checkout" />
    </section>
  )
}

export default Cart
