import React from 'react'
import DayCard from './dayCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function WeeklyWeather({weatherData}) {

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7
    };

    return (
        <div>
            <h1 className="weather-heading">Daily</h1>
            <Slider {...settings} className="hourly-slider">
                {Object.keys(weatherData).map((index) => {
                    return (
                        <DayCard index={index} data={weatherData[index]} />
                    )
                })}
            </Slider>
        </div>
    )
}

export default WeeklyWeather
