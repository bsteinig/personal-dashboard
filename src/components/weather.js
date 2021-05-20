import React, { useEffect, useState } from 'react'
import CurrentWeather from '../content/currentWeather'
import HourlyWeather from '../content/hourlyWeather'
import WeeklyWeather from '../content/weeklyWeather'

const weather_api = {
    key: process.env.REACT_APP_WEATHER_API_KEY,
    base: "https://api.openweathermap.org/data/2.5/onecall?"
}
const geocoding_api = {
    key: process.env.REACT_APP_GEOCODING_API_KEY,
    base: "https://maps.googleapis.com/maps/api/geocode/json?"
}

function Weather() {

    const [weatherData, setWeatherData] = useState({})
    const [location, setLocation] = useState({})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            console.log("Latitude is :", pos.coords.latitude);
            console.log("Longitude is :", pos.coords.longitude);
            let data = {latitude: pos.coords.latitude, longitude: pos.coords.longitude}
            fetch(`${weather_api.base}lat=${data.latitude}&lon=${data.longitude}&units=imperial&appid=${weather_api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeatherData(result)
            });
            fetch(`${geocoding_api.base}latlng=${data.latitude},${data.longitude}&result_type=political&key=${geocoding_api.key}`)
            .then(res => res.json())
            .then(result => {
                setLocation(result.results)
            });
        });
    }, [])



    return (
        <div className='weather-card'>
        {Object.keys(weatherData).length !== 0 && Object.keys(location).length !== 0?
                <CurrentWeather weatherData={weatherData.current} location={location[0].formatted_address}/>          
        :
                <div className='not-found'>Weather Data not Found</div>    
        }
        {Object.keys(weatherData).length !== 0 && Object.keys(location).length !== 0?
            <div className="weather-stack">
                <HourlyWeather weatherData={weatherData.hourly} />
                <WeeklyWeather weatherData={(weatherData.daily).slice(1)} />
            </div>            
        :
            <></>    
        }

                
        </div>
    )
}

export default Weather

/*
  
*/