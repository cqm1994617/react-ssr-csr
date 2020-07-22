import React from 'react'
import style from './index.scss'
import styled from 'styled-components'

const Title = styled.div `
  color: #FFA500;
  font-size: 36px;
  margin-bottom: 30px;
`

function StyleTest() {

  return (
    <>
      <style jsx>
        {`
          .title {
            color: #EE82EE;
            font-size: 36px;
            margin-bottom: 30px;
          }
        `}
      </style>

      <div className={style.title}>import scss展现的样式</div>
      <div className="title">style-jsx展现的样式</div>
      <Title>styled-components展现的样式</Title>
    </>
  )

}

export default StyleTest
