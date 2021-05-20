import React from 'react'

function CurrentDate() {

    let d = new Date();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day  = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return (
        <div className="current-date">
           <span className={(d.getDay() === 0 || d.getDay() === 6) ? `weekend-day` : 'weekday-day'}>{day} </span>  {month} {date}, {year}
        </div>
    )
}

export default CurrentDate
