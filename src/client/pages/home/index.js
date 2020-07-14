import React from 'react'

function Home() {

  const click = () => {
    alert('click!')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={click}>按钮</button>
    </div>
  )
}

export default Home
