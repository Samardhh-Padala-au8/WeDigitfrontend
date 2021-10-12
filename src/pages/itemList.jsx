import React from 'react'
import news from '../images/image1.jpg'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteitem } from '../redux/actions/itemAction'
import '../styles/card.css'
const ItemList = (props) => {
  const [like, setLike] = useState(0)
  useEffect(() => {
    const letlikes = localStorage.getItem(props.data.publishedAt)
    if (letlikes != null) {
      setLike(letlikes)
    }
  }, [])
  const handleLike = (pt) => {
    setLike((prevState) => {
      return prevState + 1
    })
    localStorage.setItem(pt, like + 1)
  }
  const handlehide = (data) => {
    props.deleteitem(data.content)
    localStorage.setItem(data.title, data.content)
  }
  return (
    <div>
      <div className='grid'>
        <div className='grid-item'>
          <div className='card'>
            {props.data.urlToImage !== '' ? (
              <img
                src={props.data.urlToImage}
                alt='no pic'
                className='card-img'
              />
            ) : (
              <img src={news} alt='no pic' />
            )}
            <div className='card-content'>
              <h1 className='card-header'>{props.data.title}</h1>
              <p className='card-text'>{props.data.author}</p>
              <p className='card-text'>{props.data.publishedAt}</p>
              <div className='card-icons'>
                <p
                  className='card-icons-hover'
                  onClick={() => handleLike(props.data.publishedAt)}
                >
                  <i className='fa fa-thumbs-up'></i>
                  &nbsp;Like&nbsp;{like}
                </p>
                <p
                  className='card-icons-hover'
                  onClick={() => handlehide(props.data)}
                >
                  <i className='fa fa-eye-slash' aria-hidden='true'></i>{' '}
                  &nbsp;Hide
                </p>
              </div>
              <a
                href={props.data.url}
                target='_blank'
                rel='noreferrer'
                className='articleurl'
              >
                <button className='card-btn'>
                  Visit <span>&rarr;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deleteitem })(ItemList)
