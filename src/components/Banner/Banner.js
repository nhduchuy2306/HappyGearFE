import React from "react";
import BannerItem from "./BannerItem";
import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel>
      <BannerItem
        src="https://www.w3schools.com/bootstrap5/la.jpg"
        title="First slide label"
        smallText="Nulla vitae elit libero, a pharetra augue mollis interdum."
      />
      <BannerItem
        src="https://www.w3schools.com/bootstrap5/ny.jpg"
        title="Second slide label"
        smallText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <BannerItem
        src="https://www.w3schools.com/bootstrap5/chicago.jpg"
        title="Third slide label"
        smallText="Praesent commodo cursus magna, vel scelerisque nisl consectetur."
      />
    </Carousel>
  );
}

export default Banner;
