import Footer from "../components/Footer"
import Header from "../components/Header"
import Cart from "../components/Cart"
import useProducts from "../hooks/useProducts"
import Menu from "../components/Menu"
import useOpen from "../hooks/useOpen"

function Home() {
  const { products } = useProducts()
  const { open } = useOpen()
  
  return (
    <div className="bg-orange-200 flex flex-col">
      <Header />
      <main className="mx-5 sm:mx-24 xl:mx-40 py-5 sm:py-10">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-10">
          {products.map(item => {
            return (
              <li className="flex flex-col" key={item.id}>
                <a href="#">
                  <img className="shadow-lg cursor-pointer" src={item.image} alt={item.name} />
                </a>
                <a href="#">
                  <h3 className="pl-2 text-md sm:text-2xl hover:underline cursor-pointer">{item.name}</h3>
                </a>
                <h4 className="pl-2 text-sm sm:text-lg">{"$ " + item.price}</h4>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
      {(open.cart || open.menu) && <div className="backdrop-filter fixed inset-0"></div>}
      {open.menu && <Menu />}
      {open.cart && <Cart />}
    </div>
  )
}

export default Home
