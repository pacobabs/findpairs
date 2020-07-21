import { Layout, Typography } from 'antd'
import styled from 'styled-components'

const { Title } = Typography
const { Content } = Layout

export const App = styled(Layout)`
  && {
    background: #fff;
  }
`

export const Logo = styled(Title)`
  && {
    color: #fff;
  }
`

export const Main = styled(Content)`
  && {
    background: #fff;
    border: 3px solid #eee;
    min-height: 74vh;
    width: 100%;
    max-width: 60em;
    margin: 0.5em auto;
  }
`

export const { Header, Footer } = Layout
