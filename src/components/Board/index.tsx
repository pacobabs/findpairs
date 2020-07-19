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
          <Col xs={{ span: 24, order: 2 }} md={{ span: 18, order: 1 }}>
            <Game />
          </Col>
          <Col xs={{ span: 24, order: 1 }} md={{ span: 6, order: 2 }}>
            <Options />
          </Col>
        </Row>
      </Main>
      <Footer>Find the pairs 2020 &copy;</Footer>
    </App>
  )
}
export default Board
