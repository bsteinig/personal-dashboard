import React from 'react'
import weather_imgs from '../assets/weather_imgs'

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function DayCard({index, data}) {
    function time(){
        var dt = new Date(1000*data.dt)
        //let add = parseInt(index) + 1;
        //dt.setHours( dt.getHours() + add);
        return (
            <h3 className="time-text">{days[dt.getDay()]}</h3>
        )
    }

    function currentConditions(){

        let imgSrc = weather_imgs[data.weather[0].icon]

        return (
            <div className='curr-conditions'>
                <img src={imgSrc} alt="condition" height="75" />
                <h3 className="desc-hourly">{data.weather[0].description}</h3>
                <h2 className={`temp-hourly hot`}>{Math.round(data.temp.max)} °F</h2>
                <h2 className={`temp-hourly cool`}>{Math.round(data.temp.min)} °F</h2>
            </div>
        )
       
    }

    if(index === 0){
        return;
    }

    return (
        <div className="hour-item">
            {time()}
            {currentConditions()}
        </div>
    )
}

export default DayCard
