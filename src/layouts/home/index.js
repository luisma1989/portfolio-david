import { connect } from 'react-redux'
import Home from './home'

// Retrieve data from store as props
const mapStateToProps = ({ intl }) => {
  return {
    intl,
  }
}

export default connect(mapStateToProps)(Home)
