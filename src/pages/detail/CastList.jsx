// @ts-nocheck
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import tmdbApi from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig'
const CastList = props => {
  const { category } = useParams()

  const [casts, setCasts] = useState([])

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id)
      setCasts(response.cast.slice(0, 5))
    }
    getCredits()
  }, [category, props.id])

  return (
    <div className="casts">
      {
        casts.map((item, i) => (
          <div className="casts__item" key={i}>
            <div
              className="casts__item__img"
              style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}
            ></div>
            <div className="cast__item__name">{item.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default CastList