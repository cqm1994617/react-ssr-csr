import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_ADD } from '../../actions/homeAction'
import wrapper from '../../Wrapper'
import './index.scss'

function Home() {

  const dispatch = useDispatch()
  const value = useSelector(state => state.homeReducer)

  const click = () => {
    dispatch(HOME_ADD)
  }

  return (
    <div>
      <h1 className="title">Home Page</h1>
      <button onClick={click}>+1</button>
      <div>{value}</div>
    </div>
  )
}

Home.getInitialProps = async (store) => {

  await new Promise((resolve) => {
    setTimeout(() => {
      store.dispatch(HOME_ADD)
      resolve()
    }, 1500)
  })
}

export default wrapper(Home)
