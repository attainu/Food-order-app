import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Flickity.css";
import { v4 as uuidv4 } from "uuid";
const photos = [
  {
    name: "img1",
    url: "https://media.timeout.com/images/105239239/image.jpg",
  },
  {
    name: "img2",
    url:
      "https://www.galwaytourism.ie/wp-content/uploads/2019/05/top-5-restaurants.jpg",
  },
  {
    name: "img3",
    url:
      "https://gffoodservice.org/wp-content/uploads/2015/03/restaurant-e1456862749354.jpg",
  },
  {
    name: "img4",
    url: "https://il8.picdn.net/shutterstock/videos/3743186/thumb/1.jpg",
  },
];

export default class Sliders extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      className: "slides",
    };
    return (
      <div className="carousel" style={{ padding: 24, marginTop: 300 }}>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div key={uuidv4()}>
                <img
                  src={photo.url}
                  width="90%"
                  height="50%"
                  style={{ width: "350", height: "500px" }}
                  alt="nopic"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
