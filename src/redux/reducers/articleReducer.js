import { SET_ITEMS, DELETE_ITEMS } from '../actionName'

const astate = {
  articles: null,
}

export const articleReducer = (state = astate, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ITEMS:
      console.log('items', payload)
      return { ...state, articles: payload }
    case DELETE_ITEMS:
      console.log(payload)
      const filteredarticles = state.articles.filter(
        (item) => item.content !== payload
      )
      state.articles = filteredarticles
      console.log(state.articles)
      return { ...state, ...state.articles }
    default:
      return state
  }
}
