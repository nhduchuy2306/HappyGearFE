import React from 'react'
import Product from '../Product/Product'
import User from '../User/User'

function MainPage({ table }) {

  return (
    <>
      { table==="user" && <User/> }
      { table==="product" && <Product/> }
    </>
  )
}

export default MainPage