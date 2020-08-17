import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Flickity.css";
import { v4 as uuidv4 } from "uuid";
const photos = [
  {
    name: "img1",
    url:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?cs=srgb&dl=pexels-pixabay-315755.jpg&fm=jpg",
  },
  {
    name: "img2",
    url:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?cs=srgb&dl=pexels-dzenina-lukac-1583884.jpg&fm=jpg",
  },
  {
    name: "img3",
    url:
      "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?cs=srgb&dl=pexels-elli-1854652.jpg&fm=jpg",
  },
  {
    name: "img4",
    url: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg",
  },
];

class FoodSliders extends Component {
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

export default FoodSliders;
