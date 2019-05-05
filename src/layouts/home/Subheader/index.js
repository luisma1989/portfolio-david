import { connect } from 'react-redux'
import Subheader from './Subheader'
import { getSubheaderData } from 'reducers/subheader'

// Retrieve data from store as props
const mapStateToProps = ({ intl, subheader }) => {
  return {
    intl,
    subheader,
  }
}

const mapDispatchToProps = {
  getSubheaderData
}

export default connect(mapStateToProps, mapDispatchToProps)(Subheader)
