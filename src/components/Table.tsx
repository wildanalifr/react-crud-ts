import { useEffect, useState } from 'react'
import { useBearStore } from '../store/tableStore'

export default function Table() {
  const [tables, setTables] = useState<string[]>(['jfslkjf', 'jfsljfl'])
  const bears = useBearStore((state) => state.bears)
  console.log('kwkwkwkwk')

  useEffect(() => {
    if (bears) {
      setTables((prevTables) => [...prevTables, ...bears])
    }
  }, [bears])

  return (
    <>
      {tables?.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  )
}
