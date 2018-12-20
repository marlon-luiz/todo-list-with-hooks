import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

export default WrappedComponent =>
  class extends Component {
    render() {
      const { list } = this.props
      return !_.isEmpty(list) ? (
        <WrappedComponent {...this.props} />
      ) : (
        <div>
          <Warning>Não encontrado nenhum resultado</Warning>
        </div>
      )
    }
  }

const Warning = styled.span`
  padding: 15px;
`
