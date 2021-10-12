import { combineReducers } from 'redux'
import { articleReducer } from './reducers/articleReducer'
const rootReducer = combineReducers({
  articleState: articleReducer,
})

export default rootReducer
