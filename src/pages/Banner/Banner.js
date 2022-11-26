import React from 'react'
import { Link } from 'react-router-dom';
import "./Banner.scss"

function Banner({ image, title, name }) {
  return (
    <section className="breadcrumb-section set-bg" style={{backgroundImage: `url(${image})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>{title===""?"HappyGear Shop":title}</h2>
                        <div className="breadcrumb__option">
                            <Link to="/">Home</Link>
                            <span>{name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner