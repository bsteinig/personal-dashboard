import React, { useEffect, useState } from 'react'


function DigitalClock(){

    const [time, setTime ] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let h12 = 'AM';
    if(s < 10) s = "0" + s; 
    if(m < 10) m = "0" + m;
    if(h >= 12){
        h = h-12;
        h12 = 'PM'
    } 
    if(h === 0) h = 12;  

    return (
        <div className="dig-clock">
            <h1 className="time"> {h}:{m}:{s}</h1>
            <h1>&nbsp;{h12}</h1>
        </div>
    )
}

export default DigitalClock