import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_ADD } from '../../actions/homeAction'
import './index.scss'

function Home(props) {

  const dispatch = useDispatch()
  const value = useSelector(state => state.homeReducer)

  const click = () => {
    dispatch(HOME_ADD)
  }

  console.log(props.route)

  return (
    <div>
      <h1 className="title">Home Page</h1>
      <button onClick={click}>+1</button>
      <div>{value}</div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Jack',
        age: 22
      })
    }, 500)
  })

  return {
    ...data
  }
}

export default Home
