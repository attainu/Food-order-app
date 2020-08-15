import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Flickity.css";

const photos = [
  {
    name: "img1",
    url: "https://media.timeout.com/images/105239239/image.jpg",
  },
  {
    name: "img2",
    url:
      "https://gffoodservice.org/wp-content/uploads/2015/03/restaurant-e1456862749354.jpg",
  },
  {
    name: "img3",
    url:
      "https://www.galwaytourism.ie/wp-content/uploads/2019/05/top-5-restaurants.jpg",
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      className: "slides",
    };
    return (
      <div className="carousel" style={{ padding: 24, marginTop: 300 }}>
        <Slider {...settings}>
          {photos.map((photo) => {
            return (
              <div>
                <img
                  src={photo.url}
                  width="90%"
                  height="50%"
                  style={{ width: "350", height: "500px" }}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
