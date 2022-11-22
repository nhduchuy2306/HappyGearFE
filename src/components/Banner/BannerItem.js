import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function BannerItem({src,title,smallText}) {
  return (
    <Carousel.Item>
        <img
          className="d-block w-100"
          src={src}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>
            {smallText}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
  );
}

export default BannerItem;
