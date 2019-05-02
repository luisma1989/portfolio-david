import * as api from 'api'
import { GET_HEADER_DATA } from 'action-types'
import createReducer from './create-reducer'

export const getHeaderData = () => (dispatch) => {
  dispatch({ type: GET_HEADER_DATA.REQUEST})

  api.getHeader()
  .then((header) => {
    dispatch({ type: GET_HEADER_DATA.SUCCESS})
    dispatch({
      type: GET_HEADER_DATA.SET,
      payload: header.data
    })
  })
  .catch((error) => {
    dispatch({
      type: GET_HEADER_DATA.FAILURE,
      error,
    })
  })
}

const initialData = {}
const ACTION_HANDLERS = {
  [GET_HEADER_DATA.SET]: (state, { payload }) => ({
    ...state,
    ...payload,
  })
}

export default createReducer(initialData, ACTION_HANDLERS)
