import React from 'react'
import Article from './img/article.jpg'

const Articles = () => {
  return (
    <div>
      <img className='w-100' src={Article} alt="Articles" />
      <strong>Solar Panels for Apartments: The Complete Guide for Renters</strong>
    </div>
  )
}

export default Articles;