import Footer from "../components/Footer"
import Header from "../components/Header"
import sample from "../assets/sample.png"
import { useState } from "react"
import Product from "../components/Product"

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState(true)

  const products = [
    { id: 1, name: "T Shirt", price: 10.00, img: "assets/T-Shirt.png" },
    { id: 2, name: "Pants", price: 29.00, img: "assets/Pants.png" },
    { id: 3, name: "Hoodie", price: 38.00, img: "assets/Hoodie.png" },
    { id: 4, name: "CD", price: 47.00, img: "assets/CD.png" },
    { id: 5, name: "Vinyl", price: 56.00, img: "assets/Vinyl.png" },
  ]
  
  return (
    <div className="bg-orange-200 flex flex-col">
      <Header />
      <main className="p-6 xl:p-12">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-6">
          {products.map(item => {
            return (
              <li className="flex flex-col" key={item.id}>
                <img className="rounded-lg shadow-lg" src={sample} alt={item.name} />
                <h3 className="pl-2 text-2xl">{item.name}</h3>
                <h4 className="pl-2 text-lg">{"$ " + item.price + ",00"}</h4>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
      {active && <Product />}
    </div>
  )
}

export default Home
