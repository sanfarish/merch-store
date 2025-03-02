import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

function useMenu() {
  const { menuOpen, setMenuOpen } = useContext(DataContext)

  return { menuOpen, setMenuOpen }
}

export default useMenu