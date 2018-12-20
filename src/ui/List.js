import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'

import withList from '../hoc/withList'

const List = ({ list, children }) => (
  <section>{_.map(list, children)}</section>
)

List.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired
}

export default withList(List)
