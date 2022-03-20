import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../components/page-header/PageHeader';

import { category as cate } from '../api/tmdbApi'
import MovieGrid from '../components/movie-grid/MovieGrid';
import Sweep from '../components/sweep/Sweep';

const Catalog = () => {

  window.scrollTo(0, 0)

  const { category } = useParams()


  return (
    <>
      <Sweep category={category} />
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  )
}

export default Catalog