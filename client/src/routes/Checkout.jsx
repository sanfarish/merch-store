import useCart from "../hooks/useCart"

function Checkout() {
  const { cart } = useCart()


  return (
    <div className="bg-orange-200 flex flex-col gap-6 p-6">
      <ul className="max-h-96 flex flex-col gap-4 p-2 border-2 overflow-y-auto">
      {cart.items.map(item => {
        return (
          <li key={item.id} className="flex gap-4">
            <img className="w-24" src={item.image} alt={item.name} />
            <div className="grow flex flex-col justify-between truncate">
              <span className="font-medium text-lg truncate">{item.name}</span>
              <div className="flex justify-between">
                <span>{"$ " + Number(item.price).toFixed(2)}</span>
                <span>Quantity: {item.qty}</span>
              </div>
            </div>
          </li>
        )
      })}
      </ul>
      <label htmlFor="customer-name" className="text-sm font-medium">
        First name
        <input type="text" name="customer-name" id="customer-name" className="border-2 text-sm rounded-lg block w-full p-2.5" placeholder="John Doe" required />
      </label>
      <label htmlFor="customer_address" className="block mb-2 text-sm font-medium">
        Address
        <input type="text" id="customer_address" className="border-2 text-sm rounded-lg block w-full p-2.5" placeholder="US state" required />
      </label>
      <label htmlFor="customer_email" className="block mb-2 text-sm font-medium">
        Email
        <input type="email" id="customer_email" className="border-2 text-sm rounded-lg block w-full p-2.5" placeholder="john@mail.com" required />
      </label>
      <label htmlFor="shipment_options" className="block mb-2 text-sm font-medium">
        Shipment Options
        <select id="shipment_options" className="border-2 text-sm rounded-lg block w-full p-2.5">
          <option value="standard">Standard</option>
          <option value="express">Express</option>
          <option value="overnight">Overnight</option>
        </select>
      </label>
      <input className="bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="button" value="Pay" />
    </div>
  )
}

export default Checkout