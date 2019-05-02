import * as api from 'api'
import { GET_SUBHEADER_DATA } from 'action-types'
import createReducer from './create-reducer'

export const getSubheaderData = () => (dispatch) => {
  dispatch({ type: GET_SUBHEADER_DATA.REQUEST})

  api.getHeader()
  .then((header) => {
    dispatch({ type: GET_SUBHEADER_DATA.SUCCESS })
    dispatch({
      type: GET_SUBHEADER_DATA.SET,
      payload: header.data
    })
  })
  .catch((error) => {
    dispatch({
      type: GET_SUBHEADER_DATA.FAILURE,
      error,
    })
  })
}

const initialData = {}
const ACTION_HANDLERS = {
  [GET_SUBHEADER_DATA.SET]: (state, { payload }) => ({
    ...state,
    ...payload,
  })
}

export default createReducer(initialData, ACTION_HANDLERS)
