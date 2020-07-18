import styled from 'styled-components'
import { Col } from 'antd'

type ImageProps = {
  hidden: boolean
}

type CardBoxProps = {
  height: string
}

export const CardBox = styled(Col)`
  && {
    height: ${(props: CardBoxProps) => props.height};
    padding: 0.075em;
  }
`

export const Box = styled('div')`
  cursor: pointer;
  background: #fec;
  height: 100%;
  border: 1px solid #cba;
  box-shadow: 3px 2px 16px -8px rgba(77, 72, 77, 0.52);
`

export const Image = styled('img')`
  opacity: ${(props: ImageProps) => (props.hidden ? 0 : 1)};
  width: 100%;
  height: 100%;
  object-fit: cover;
`
