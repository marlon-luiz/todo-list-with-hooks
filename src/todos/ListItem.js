import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

export default ({ todo, removeTodo }) => (
  <Item>
    <Text>{todo}</Text>
    <Icon icon="trash" onClick={removeTodo} />
  </Item>
)

const Item = styled.article`
  padding: 8px 15px;
  display: flex;
`

const Text = styled.span`
  flex: 1;
`
