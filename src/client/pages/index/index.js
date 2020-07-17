import React from 'react'
import { useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  cursor: pointer;
  color: #ff4500;
  height: 80px;
  background-color: #eee;
  & > div {
    height: 100%;
    flex: 1;
  }
`

const Header = () => {

  const history = useHistory()

  const to = (path) => () => {
    history.push(path)
  }

  return (
    <HeaderContainer>
      <div onClick={to('/')}>111</div>
      <div onClick={to('/test')}>222</div>
    </HeaderContainer>
  )
}

function Index(props) {
  return (
    <>
      <Header />
      {renderRoutes(props.route.routes)}
    </>
  )
}

export default Index
