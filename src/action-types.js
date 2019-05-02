function requestActions(actionName) {
  return {
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    SET: `${actionName}_SET`,
  }
}

export const REQ_START = 'REQ_START'
export const REQ_END = 'REQ_END'
export const GET_HEADER_DATA = requestActions('GET_HEADER_DATA')
export const GET_SUBHEADER_DATA = requestActions('GET_SUBHEADER_DATA')
