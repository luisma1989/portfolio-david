import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { connect } from 'react-redux'

export function IntlWrapper(props) {
  return (
    <IntlProvider {...props.intl} >
      {props.children}
    </IntlProvider>
  )
}

IntlWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  intl: PropTypes.object.isRequired,
}

// Retrieve data from store as props
function mapStateToProps({ intl }) {
  return {
    intl
  }
}

export default connect(mapStateToProps)(IntlWrapper)
