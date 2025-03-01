import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

function useCart() {
  const {
    cart,
    setCart
  } = useContext(DataContext)

  return { cart, setCart }
}

export default useCart