import React from 'react'
import { useHistory } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import styled from 'styled-components'
import testImg from '../../../img/test.jpg'

const Root = styled.div`
  max-width: 1000px;
  overflow: hidden;
  margin: auto;
`
const Image = styled.div`
  margin-top: 30px;
  background: url(${testImg});
  background-size: cover;
  height: 300px;
`
const HeaderContainer = styled.div`
  display: flex;
  cursor: pointer;
  color: #ff4500;
  height: 50px;
  background-color: #eee;
  & > div {
    height: 100%;
    flex: 1;
    text-align: center;
    line-height: 50px;
  }
`

const Header = () => {

  const history = useHistory()

  const to = (path) => () => {
    history.push(path)
  }

  return (
    <>
      <Image />
      <HeaderContainer>
        <div onClick={to('/home')}>首页</div>
        <div onClick={to('/ssr-list')}>SSR加载列表</div>
        <div onClick={to('/csr-list')}>CSR加载列表</div>
        <div onClick={to('/style-test')}>样式对比测试</div>
      </HeaderContainer>
    </>
  )
}

function Index(props) {
  return (
    <Root>
      <Header />
      {renderRoutes(props.route.routes)}
    </Root>
  )
}

Index.getInitialProps = async () => {

}

export default Index
