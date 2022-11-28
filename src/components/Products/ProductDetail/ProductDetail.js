import React, { useState } from "react";
import Banner from "../../../pages/Banner/Banner";
import "./ProductDetail.scss";
import BannerImg from "../../../assets/2abcd1.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Comment from "../../Comment/Comment";

function ProductDetail() {
  const [count, setCount] = useState(1);
  const [picutreUrl, setPictureUrl] = useState(
    "https://technext.github.io/ogani/img/product/details/product-details-1.jpg"
  );

  return (
    <>
      <Banner image={BannerImg} name="Product Detail" title="Product Detail" />
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={picutreUrl}
                    alt=""
                  />
                </div>
                <OwlCarousel
                  className="owl-theme"
                  loop
                  margin={10}
                  nav
                  autoplay
                  items={5}
                >
                  <div
                    className="item"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setPictureUrl(
                        "https://technext.github.io/ogani/img/product/details/product-details-3.jpg"
                      )
                    }
                  >
                    <img
                      src="https://technext.github.io/ogani/img/product/details/product-details-3.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="item"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setPictureUrl(
                        "https://technext.github.io/ogani/img/product/details/product-details-2.jpg"
                      )
                    }
                  >
                    <img
                      src="https://technext.github.io/ogani/img/product/details/product-details-2.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="item"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setPictureUrl(
                        "https://technext.github.io/ogani/img/product/details/product-details-5.jpg"
                      )
                    }
                  >
                    <img
                      src="https://technext.github.io/ogani/img/product/details/product-details-5.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    className="item"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setPictureUrl(
                        "https://technext.github.io/ogani/img/product/details/product-details-5.jpg"
                      )
                    }
                  >
                    <img
                      src="https://technext.github.io/ogani/img/product/details/product-details-5.jpg"
                      alt=""
                    />
                  </div>
                </OwlCarousel>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                {/* <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div> */}
                <div className="product__details__price">$50.00</div>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                  amet quam vehicula elementum sed sit amet dui. Proin eget
                  tortor risus.
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span
                        className="noselect"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          count <= 1 ? setCount(1) : setCount(count - 1)
                        }
                      >
                        -
                      </span>
                      <input type="text" value={count} />
                      <span
                        className="noselect"
                        style={{ cursor: "pointer" }}
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <a href="!#" className="btn btn-primary primary-btn">
                  ADD TO CARD
                </a>
                <a href="!#" className="heart-icon">
                  <span className="fa fa-heart"></span>
                </a>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>0.5 kg</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="!#">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="!#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="!#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="!#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <p
                      className="nav-link active"
                      data-toggle="tab"
                      role="tab"
                      style={{ border: "none", fontWeight: "bold", marginBottom: "20px"}}
                    >
                      Description
                    </p>
                  </li>
                </ul>
                <div className="tab-content">
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed
                    sit amet dui. Pellentesque in ipsum id orci porta
                    dapibus. Proin eget tortor risus. Vivamus suscipit
                    tortor eget felis porttitor volutpat. Vestibulum ac diam
                    sit amet quam vehicula elementum sed sit amet dui. Donec
                    rutrum congue leo eget malesuada. Vivamus suscipit
                    tortor eget felis porttitor volutpat. Curabitur arcu
                    erat, accumsan id imperdiet et, porttitor at sem.
                    Praesent sapien massa, convallis a pellentesque nec,
                    egestas non nisi. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; Donec velit neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Proin eget
                    tortor risus.
                  </p>
                </div>
              </div>
              <div className="product__details__tab">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <p
                      className="nav-link active"
                      data-toggle="tab"
                      role="tab"
                      style={{ border: "none", fontWeight: "bold", marginBottom: "20px"}}
                    >
                      Comments
                    </p>
                  </li>
                </ul>
                <div className="tab-content">
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
