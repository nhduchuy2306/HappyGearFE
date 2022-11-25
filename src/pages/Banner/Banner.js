import React from 'react'
import { Link } from 'react-router-dom';
import "./Banner.scss"

function Banner(props) {
  return (
    <section className="breadcrumb-section set-bg" style={{backgroundImage: `url(${props.image})`}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="breadcrumb__text">
                        <h2>{props.title===""?"HappyGear Shop":props.title}</h2>
                        <div className="breadcrumb__option">
                            <Link to="/">Home</Link>
                            <span>{props.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner