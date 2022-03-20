import React from 'react'

import './movie-card.scss'

import { Link } from 'react-router-dom'

import apiConfig from '../../api/apiConfig'
import tmdbApi, { category } from '../../api/tmdbApi'
import noPoster from '../../assets/no-poster.png'

import Button from '../../components/button/Button'

const MovieCard = props => {

  const item = props.item

  const link = '/' + category[props.category] + '/' + item.id

  const bg = ((item.poster_path || item.backdrop_path) ? apiConfig.w500Image(item.poster_path || item.backdrop_path) : noPoster)

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  )
}

export default MovieCard