import  { combineReducers } from 'redux'
import intl from './Intl/IntlReducer'
import app from './app'
import header from './header'
import subheader from './subheader'

const rootReducer = combineReducers({
  intl,
  app,
  header,
  subheader,
})

export default rootReducer
