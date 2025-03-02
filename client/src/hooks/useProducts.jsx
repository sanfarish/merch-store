import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

function useProducts() {
  const { products, setProducts } = useContext(DataContext)

  return { products, setProducts }
}

export default useProducts