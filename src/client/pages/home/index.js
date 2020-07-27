import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_ADD } from '../../actions/homeAction'
import wrapper from '../../Wrapper'
import style from './index.scss'

function Home() {

  const dispatch = useDispatch()
  const value = useSelector(state => state.homeReducer)

  const click = () => {
    dispatch(HOME_ADD)
  }

  return (
    <div>
      <h1 className={style.title}>Home P231age</h1>
      <button onClick={click}>+1</button>
      <div>{value}</div>
    </div>
  )
}

Home.getInitialProps = async (store) => {
  store.dispatch(HOME_ADD)
}

export default wrapper(Home)
