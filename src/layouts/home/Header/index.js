import { connect } from 'react-redux'
import Header from './Header'
import { getHeaderData } from 'reducers/header'

// Retrieve data from store as props
const mapStateToProps = ({ intl, header }) => {
  return {
    intl,
    header,
  }
}

const mapDispatchToProps = {
  getHeaderData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
