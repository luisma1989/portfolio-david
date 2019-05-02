import { REQ_START, REQ_END } from 'action-types'
import createReducer from './create-reducer'

const INITIAL_STATE = {
  loaders: 0,
  header: {
    name: '',
    apellidos: '',
  }
}

const ACTION_HANDLERS = {
  [REQ_START]: (state) => ({
    ...state,
    loaders: state.loaders + 1,
  }),
  [REQ_END]: (state) => ({
    ...state,
    loaders: !state.loaders ? 0 : state.loaders - 1,
  }),
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
