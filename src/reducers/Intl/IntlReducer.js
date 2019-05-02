import { enabledLanguages, localizationData } from './setup'
import { SWITCH_LANGUAGE } from './IntlActions'

const initLocale = 'es'
const initialState = {
  locale: initLocale,
  enabledLanguages,
  ...(localizationData[initLocale] || {})
}

const IntlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      const { type, ...actionWithoutType } = action
      return { ...state, ...actionWithoutType }
    }

    default:
      return state
  }
}

export default IntlReducer
