import React, { Suspense } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from '../client/pages/home'
import Test from '../client/pages/test'
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
      <div onClick={to('/home')}>111</div>
      <div onClick={to('/test')}>222</div>
    </HeaderContainer>
  )
}

export default () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" exact render={() => <Home a="1" />} />
        <Route path="/test" exact render={() => <Test b="2" />} />
      </Switch>
    </>
  )
}
