import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'

function useDetail() {
  const { detail, setDetail } = useContext(DataContext)
  
  return { detail, setDetail }
}

export default useDetail