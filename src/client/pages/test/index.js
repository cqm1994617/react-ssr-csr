import React, { useEffect, useState } from 'react'
import './index.css'

function Test() {

  const [count, setCount] = useState(0)

  useEffect(() => {

    const timer = setInterval(() => {
      setCount(t => t + 1)
    }, 1000)

    return () => clearInterval(timer)

  }, [])

  return (
    <div>
      <h1>标题</h1>
      <div className="count">{count}</div>
    </div>
  )
}

export default Test
