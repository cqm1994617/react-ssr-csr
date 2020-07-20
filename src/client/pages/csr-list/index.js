import React, { useState, useEffect  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import wrapper from '../../Wrapper'
import { SET_LIST } from '../../actions/csrListAction'
import style from './index.scss'

function getCSRList() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['a', 'b', 'c', 'd', 'e', 'f'])
    }, 1500)
  })
}

function CSRList() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const list = useSelector(state => state.csrListReducer)

  useEffect(() => {
    //模拟加载...
    (async () => {
      const list = await getCSRList()
      dispatch({
        type: SET_LIST.type,
        payload: list
      })
      setLoading(false)
    })()
  }, [dispatch])

  if (loading) {
    return <div>列表数据加载中...</div>
  }
  return (
    <div>
      {
        list.map((item, index) => <div className={style.list} key={index}>{item}</div>)
      }
    </div>
  )
}

export default wrapper(CSRList)
