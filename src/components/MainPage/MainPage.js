import React from 'react'
import './MainPage.scss'
import Banner from '../../pages/Banner/Banner';
import BannerImg from "../../assets/2abcd1.jpg"

function Content() {
  return (
    <div>
      <Banner image={BannerImg} name="HomePage" title="Home Page"/>
    </div>
  )
}

export default Content
