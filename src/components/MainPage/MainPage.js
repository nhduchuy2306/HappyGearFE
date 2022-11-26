import React from 'react'
import './MainPage.scss'
import CategoryBar from '../Category/CategoryBar';
import BestSellerProduct from './../Products/BestSellerProduct';
import LatestProduct from '../Products/LatestProduct';

function MainPage() {
  return (
    <div>
      <CategoryBar />
      <BestSellerProduct />
      <LatestProduct />
    </div>
  )
}

export default MainPage
