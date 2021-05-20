import React from 'react'
import HourCard from './hourCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HourlyWeather({weatherData}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7
    };

    return (
        <div className="hourly-weather">
            <h1 className="weather-heading">Hourly</h1>
            <Slider {...settings} className="hourly-slider">
                {Object.keys(weatherData).map((index) => {
                    return (
                        <HourCard index={index} data={weatherData[index]} />
                    )
                })}
            </Slider>
        </div>
    )
}

export default HourlyWeather
