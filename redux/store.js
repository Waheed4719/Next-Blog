import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import authReducer from './reducers/auth'

const combinedReducer = combineReducers({
  auth: authReducer
})

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state // use previous state
    }
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const makeStore = () =>
  configureStore({
    reducer: masterReducer
  })

export const wrapper = createWrapper(makeStore, { debug: true })
