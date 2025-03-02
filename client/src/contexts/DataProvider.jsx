import { useState } from 'react'
import { DataContext } from './DataContext'

function DataProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: "Sample Product 1", price: 50.00, image: "sample-1.png" },
    { id: 2, name: "Sample Product 2", price: 100.00, image: "sample-2.png" },
    { id: 3, name: "Sample Product 3", price: 75.00, image: "sample-3.png" },
    { id: 4, name: "Sample Product 4", price: 49.99, image: "sample-1.png" },
    { id: 5, name: "Sample Product 5", price: 99.99, image: "sample-2.png" },
    { id: 6, name: "Sample Product 6", price: 74.99, image: "sample-3.png" },
    { id: 7, name: "Sample Product 7", price: 50.50, image: "sample-1.png" },
    { id: 8, name: "Sample Product 8", price: 100.50, image: "sample-2.png" },
    { id: 9, name: "Sample Product 9", price: 75.50, image: "sample-3.png" }
  ])
  const [cart, setCart] = useState({
    active: false,
    items: [
      { id: 1, name: "Sample Product 1 - Lorem, Ipsum.", price: 50.00, image: "sample-1.png", qty: 23 },
      { id: 5, name: "Sample Product 5", price: 99.99, image: "sample-2.png", qty: 4 },
      { id: 9, name: "Sample Product 9", price: 75.50, image: "sample-3.png", qty: 1 },
      { id: 2, name: "Sample Product 2", price: 100.00, image: "sample-2.png", qty: 1 },
      { id: 6, name: "Sample Product 6", price: 74.99, image: "sample-3.png", qty: 1 },
      { id: 7, name: "Sample Product 7", price: 50.50, image: "sample-1.png", qty: 1 },
      { id: 3, name: "Sample Product 3", price: 75.00, image: "sample-3.png", qty: 1 },
      { id: 4, name: "Sample Product 4", price: 49.99, image: "sample-1.png", qty: 1 },
      { id: 8, name: "Sample Product 8", price: 100.50, image: "sample-2.png", qty: 1 },
    ],
    subtotal: 2186.46
  })

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
