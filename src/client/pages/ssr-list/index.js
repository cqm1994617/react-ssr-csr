import React from 'react'
import { useSelector } from 'react-redux'
import wrapper from '../../Wrapper'
import { SET_LIST } from '../../actions/ssrListAction'
import style from './index.scss'

function getSSRList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }, 1500)
  })
}

function SSRList() {

  const list = useSelector(state => state.ssrListReducer)

  return (
    <div>
      {
        list.map((item, index) => <div key={index} className={style.list}>{item}</div>)
      }
    </div>
  )
}

SSRList.getInitialProps = async (store) => {
  const list = await getSSRList()
  store.dispatch({
    type: SET_LIST.type,
    payload: list
  })
}

export default wrapper(SSRList)
