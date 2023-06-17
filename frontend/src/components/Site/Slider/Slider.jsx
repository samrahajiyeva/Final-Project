import React from "react";
import Slider from "react-slick";
import './Slider.scss'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="slider">
      <div className="slider__div">
        <div className="slider__div__img">
          <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="img" />
        </div>
        <div className="slider__div__content">
          <h4>JURGEN REITSCHILD</h4>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
        </div>
      </div>
      <div className="slider__div">
        <div className="slider__div__img">
          <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg" alt="img" />
        </div>
        <div className="slider__div__content">
          <h4>RIYA YAHIDA </h4>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
        </div>
      </div>
      <div className="slider__div">
        <div className="slider__div__img">
          <img src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="img" />
        </div>
        <div className="slider__div__content">
          <h4>STEVE JORGAN</h4>
          <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate</p>
        </div>
      </div>
    </Slider>
  );
}