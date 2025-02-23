import sample from "../assets/sample.png"

function Checkout() {
  const cart = [
    { id: 1, name: "T Shirt", price: 10, qty: 1, img: "assets/T-Shirt.png" },
    { id: 2, name: "T Shirt", price: 10, qty: 1, img: "assets/T-Shirt.png" },
    { id: 3, name: "T Shirt", price: 10, qty: 1, img: "assets/T-Shirt.png" },
    { id: 4, name: "T Shirt", price: 10, qty: 1, img: "assets/T-Shirt.png" },
    { id: 5, name: "T Shirt", price: 10, qty: 1, img: "assets/T-Shirt.png" },
  ]


  return (
    <div className="bg-orange-200 flex flex-col p-6 justify-center items-center gap-4">
      <div>
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
                  <h4>{item.qty}</h4>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
          <label htmlFor="customer_name" className="block mb-2 text-sm font-medium">First name</label>
          <input type="text" name="customer_name" id="customer_name" className="border-2 text-sm rounded-lg block w-full p-2.5" placeholder="John Doe" required />
      </div>
      <div>
          <label htmlFor="customer_address" className="block mb-2 text-sm font-medium">Address</label>
          <input type="text" id="customer_address" className="border-2 text-sm rounded-lg block w-full p-2.5" placeholder="US state" required />
      </div>
      <div>
          <label htmlFor="customer_email" className="block mb-2 text-sm font-medium">Email</label>
          <input type="email" id="customer_email" className="border-2 text-sm rounded-lg block w-full p-2.5" placeholder="john@mail.com" required />
      </div>
      <div>
        <label htmlFor="shipment_options" className="block mb-2 text-sm font-medium">Shipment Options</label>
        <select id="shipment_options" className="border-2 text-sm rounded-lg block w-full p-2.5">
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </div>
      <div className="flex flex-col items-center">
        <p>*only available payment methods is through QR code.</p>
        <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" value="Pay" />
      </div>
    </div>
  )
}

export default Checkout