import { SET_ITEMS, DELETE_ITEMS } from '../actionName'
import config from '../../config'
import axios from 'axios'

export const setarticleitems =
  (search = 'movies', page = 1) =>
  async (dispatch) => {
    const { data } = await axios(
      `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=20&apiKey=${config.API_KEY}`
    )
    if ((data.status = 'ok')) {
      let ald = data.articles.filter((ds) => {
        let deleteboolean = localStorage.getItem(ds.title)
        return deleteboolean !== ds.content
      })
      console.log(ald)
      dispatch({ type: SET_ITEMS, payload: ald })
    }
    console.log(data)
  }
export const deleteitem = (content) => (dispatch) => {
  dispatch({ type: DELETE_ITEMS, payload: content })
}
