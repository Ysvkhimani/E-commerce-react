import React from 'react'
import SliderImages from '../components/SliderImages'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className='container'>
      <div className="main">
        <SliderImages />
        <Categories />
        <footer />

      </div>
    </div>
  )
}

export default Home