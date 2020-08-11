import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HOME_ADD } from '../../actions/homeAction'
import wrapper from '../../Wrapper'
import './index.scss'
import style from './test.module.scss'
import ListItem from './components/ListItem'
import { Button } from 'antd'
import 'antd/dist/antd.min.css'

function Home() {

  const dispatch = useDispatch()
  const value = useSelector(state => state.homeReducer)

  const click = () => {
    dispatch(HOME_ADD)
  }

  return (
    <div>
      <h1 className="h-title">Home Page</h1>
      <h1 className={style.test}>MODULE</h1>
      <button onClick={click}>+1</button>
      <div>{value}</div>
      <Button type="primary">124</Button>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  )
}

Home.getInitialProps = async (store) => {
  store.dispatch(HOME_ADD)
}

export default wrapper(Home)
