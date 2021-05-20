import React from 'react'
//import { getImage } from '../database/firebase' 
import weather_imgs from '../assets/weather_imgs'

function CurrentWeather({weatherData, location}) {


    function prettyLocation(){
        let locationArr = location.split(',')
        let cityName = locationArr[0].split(" ")
        if(cityName.length > 2) locationArr[0] = cityName[0]
        return(
            <h1 className="weather-loc">{locationArr[0]}, {locationArr[1]}</h1>
        )
    }

    function currentConditions(){

        let imgSrc = weather_imgs[weatherData.weather[0].icon]

        var tempColor;
        if(weatherData.temp > 85) tempColor = 'hot';
        else if(weatherData.temp > 65) tempColor = 'warm';
        else if(weatherData.temp > 40) tempColor = 'cool';
        else tempColor = 'cold';

        return (
            <div className='curr-conditions'>
                <img src={imgSrc} alt="condition" height="150" />
                <h3 className="desc">{weatherData.weather[0].description}</h3>
                <h2 className={`temp ${tempColor}`}>{Math.round(weatherData.temp)} °F</h2>
            </div>
        )
       
    }

    function sunriseSunset(){
        let sunrise = new Date(1000*weatherData.sunrise)
        let sunset = new Date(1000*weatherData.sunset)
        
        return(
            <div>
                <span className="ssRow">
                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-dashboard-ee96c.appspot.com/o/sunrise.png?alt=media&token=47cbca5d-0564-4d26-8a5b-fadff73b014d" alt="sun" height="35" width="35" />
                    <h3 className="ssText">{sunrise.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h3>
                </span>
                <span className="ssRow">
                    <img src="https://firebasestorage.googleapis.com/v0/b/personal-dashboard-ee96c.appspot.com/o/sunset.png?alt=media&token=37505370-9e8b-4487-a430-7857115bf824" alt="moon" height="35" width="35" />
                    <h3 className="ssText">{sunset.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</h3>
                </span>
                
            </div>
        )
    }


    return (
        <div className="weather-now">
            {prettyLocation()}
            {currentConditions()}
            {sunriseSunset()}
        </div>
    )
}

export default CurrentWeather
