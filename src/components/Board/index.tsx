import React from 'react'
import { Row, Col } from 'antd'
import { Main, App, Logo, Header, Footer } from './styled'
import Game from '@components/Cards'
import Options from '@components/Options'

const Board = () => {
  return (
    <App>
      <Header>
        <Logo>Find the pairs</Logo>
      </Header>
      <Main>
        <Row>
          <Col span={18}>
            <Game />
          </Col>
          <Col span={6}>
            <Options />
          </Col>
        </Row>
      </Main>
      <Footer>Find the pairs 2020 &copy;</Footer>
    </App>
  )
}
export default Board
