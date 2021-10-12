import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ItemList from '../pages/itemList'
import { withRouter, Link } from 'react-router-dom'
import { setarticleitems } from '../redux/actions/itemAction'
import { v4 as uuidv4 } from 'uuid'
import '../styles/card.css'
const Everything = (props) => {
  const [sitem, setsItem] = useState(props.selecteditem)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  useEffect(() => {
    console.log(props)
    props.setarticleitems(sitem, page)
    console.log(page)
  }, [page])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search !== '') {
      props.setarticleitems(search, 1)
      setsItem(search)
      setSearch('')
    }
  }
  const handlePrev = () => {
    if (page === 1) {
      setPage((prevState) => {
        return prevState
      })
    }
    if (page > 1) {
      setPage((prevState) => {
        return prevState - 1
      })
    }
  }
  const handleNext = () => {
    if (page === 5) {
      setPage((prevState) => {
        return prevState
      })
    }
    if (page < 5) {
      setPage((prevState) => {
        return prevState + 1
      })
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='searchbox'>
            <div className='box'>
              <i className='fa fa-search' aria-hidden='true'></i>

              <input
                type='text'
                name='search'
                value={search}
                placeholder='Search for any news article'
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className='routinglinks'>
          <Link to='/' className='link'>
            Politics
          </Link>
          <Link to='/movies' className='link'>
            Movies
          </Link>
          <Link to='/sports' className='link'>
            Sports
          </Link>
        </div>
      </div>
      <div className='searchalign'>
        <div className='searchtitle'>
          <p>{sitem.toUpperCase()} NEWS</p>
        </div>
      </div>
      <div className='cardbody'>
        {props.articleitems !== null
          ? props.articleitems.map((item) => (
              <ItemList key={uuidv4()} data={item} />
            ))
          : ''}
      </div>
      <div className='cardbuttons'>
        <button className='cardToggle' onClick={handlePrev}>
          Previous
        </button>
        <button className='cardToggle' onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = (storeState) => {
  return {
    articleitems: storeState.articleState.articles,
  }
}
export default connect(mapStateToProps, { setarticleitems })(
  withRouter(Everything)
)
