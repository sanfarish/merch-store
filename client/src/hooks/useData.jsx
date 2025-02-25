import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

function useData() {
  const {
    product,
    setProduct,
    modal,
    setModal
  } = useContext(DataContext)

  return [ product, setProduct, modal, setModal ]
}

export default useData