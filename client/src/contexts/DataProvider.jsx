import { useState } from 'react'
import { DataContext } from './DataContext'

function DataProvider({ children }) {
  const [product, setProduct] = useState({})
  const [modal, setModal] = useState(false)

  return (
    <DataContext.Provider
      value={{
        product,
        setProduct,
        modal,
        setModal
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
