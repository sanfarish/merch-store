import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

function useOpen() {
  const { open, setOpen } = useContext(DataContext)

  return { open, setOpen }
}

export default useOpen