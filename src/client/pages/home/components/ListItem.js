import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  display: flex;
`
const Avatar = styled.div`
  width: 100px;
  height: 100px;
  flex: none;
`
const ListContent = styled.div`
  flex: 1;
  p {
    position: relative;
  }
`
const Info = styled.span`
  color: red;
  position: relative;
  z-index: 2;
`

function ListItem() {

  return (
    <Item>
      <Avatar />
      <ListContent>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
        <div>
          <p><Info>a</Info></p>
          <p><span></span><span></span></p>
        </div>
      </ListContent>
    </Item>
  )
}

export default ListItem
