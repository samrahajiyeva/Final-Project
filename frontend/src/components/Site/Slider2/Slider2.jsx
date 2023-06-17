import React from "react";
import Slider from "react-slick";
import './Slider2.scss'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} className="slider2">
      <div className="slider2__div">
      <div className="img">
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-03.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-05.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-01.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-04.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-03.png" alt="img" />
      </div>
      </div>
      <div className="slider2__div">
      <div className="img">
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-05.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-01.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-04.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-03.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-01.png" alt="img" />
      </div>
      </div>
      <div className="slider2__div">
      <div className="img">
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-01.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-04.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-03.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-05.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-01.png" alt="img" />
      </div>
      </div>
      <div className="slider2__div">
      <div className="img">
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-04.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-03.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-05.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-01.png" alt="img" />
      <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/partner-04.png" alt="img" />
      </div>
      </div>
    </Slider>
  );
}