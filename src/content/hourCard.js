import React from 'react'
import weather_imgs from '../assets/weather_imgs'

function HourCard({index, data}) {

    function time(){
        var dt = new Date();
        let add = parseInt(index) + 1;
        dt.setHours( dt.getHours() + add);
        return (
            <h3 className="time-text">{dt.toLocaleString('en-US', { hour: 'numeric', hour12: true })}</h3>
        )
    }

    function currentConditions(){

        let imgSrc = weather_imgs[data.weather[0].icon]

        var tempColor;
        if(data.temp > 85) tempColor = 'hot';
        else if(data.temp > 65) tempColor = 'warm';
        else if(data.temp > 40) tempColor = 'cool';
        else tempColor = 'cold';

        return (
            <div className='curr-conditions'>
                <img src={imgSrc} alt="condition" height="75" />
                <h3 className="desc-hourly">{data.weather[0].description}</h3>
                <h2 className={`temp-hourly ${tempColor}`}>{Math.round(data.temp)} °F</h2>
            </div>
        )
       
    }

    return (
        <div className="hour-item">
            {time()}
            {currentConditions()}
        </div>
    )
}

export default HourCard
