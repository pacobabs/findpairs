import React, { useEffect } from 'react'
import { useState, useDispatch, setCards } from '@store'
import { Layout, Typography, Row, Col } from 'antd'
import styled from 'styled-components'

const { Title } = Typography
const { Header, Footer, Content } = Layout

const StyledLayout = styled(Layout)`
  && {
    background: #fff;
  }
`

const StyledTitle = styled(Title)`
  && {
    color: #fff;
  }
`

const StyledContent = styled(Content)`
  && {
    background: #fff;
    min-height: 80vh;
    padding: 1.625em;
    width: 100%;
    max-width: 60em;
    margin: 0 auto;
  }
`

const StyledCard = styled(Col)`
  && {
    height: 8em;
    padding: 0.125em;
  }
`

const Card = styled('div')`
  && {
    background: #eee;
    height: 100%;
  }
`

type Props = {
  size: number
}

const Cards = ({ size }: Props) => {
  return (
    <>
      {Array(size / 2)
        .fill('')
        .map(() => (
          <Row key={Math.random()}>
            <StyledCard span={6}>
              <Card>1</Card>
            </StyledCard>
            <StyledCard span={6}>
              <Card>2</Card>
            </StyledCard>
            <StyledCard span={6}>
              <Card>3</Card>
            </StyledCard>
            <StyledCard span={6}>
              <Card>4</Card>
            </StyledCard>
          </Row>
        ))}
    </>
  )
}

const Board = () => {
  console.log('board')
  const { size } = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setCards([{ image: '' }]))
  }, [])
  return (
    <StyledLayout>
      <Header>
        <StyledTitle>Find the pairs</StyledTitle>
      </Header>
      <StyledContent>
        <Row>
          <Col span={14}>
            <Cards size={size} />
          </Col>
          <Col span={10}>Size : {size} pairs</Col>
        </Row>
      </StyledContent>
      <Footer>Footer</Footer>
    </StyledLayout>
  )
}
export default Board
