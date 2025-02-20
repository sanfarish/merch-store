import sample from "../assets/sample.png"

function Cart() {
  const cart = [
    { id: 1, name: "Vinyl", price: 40, img: "assets/sample.png", qty: 1 },
    { id: 2, name: "Digital Album", price: 20, img: "assets/sample.png", qty: 1 },
    { id: 3, name: "Hoodie", price: 60, img: "assets/sample.png", qty: 2 },
  ]

  return (
    <section className="bg-gray-200 flex flex-col gap-4 p-6 fixed top-14 right-0 h-full w-full sm:w-sm">
      <ul className="flex flex-col gap-4">
        {cart.map(item => {
          return (
            <li key={item.id} className="flex gap-4 items-center">
              <img src={sample} alt={item.name} className="w-32" />
              <div className="">
                <h3 className="text-xl">{item.name}</h3>
                <h4 className="text-lg">{"$ " + item.price + ",00"}</h4>
                <div className="inline-block border">
                  <input className="ml-1 mr-2 p-1" type="button" value="-" />
                  <input className="w-8 text-center" type="text" name="" id="" defaultValue={1} />
                  <input className="mr-1 ml-2 p-1" type="button" value="+" />
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