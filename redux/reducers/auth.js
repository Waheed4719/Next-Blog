const initialState = {
  token: null,
  user: null,
  error: null,
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        token: action.token,
        user: action.user,
        error: null,
        loading: false
      }
    case 'AUTH_ERROR':
      return {
        ...state,
        token: null,
        user: null,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}

export default authReducer