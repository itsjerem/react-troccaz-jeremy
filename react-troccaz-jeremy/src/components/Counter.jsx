import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 17867463273)}>
          count is {count}
    </button>

  )
}

export default Counter
