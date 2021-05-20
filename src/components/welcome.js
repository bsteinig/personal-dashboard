import React from 'react'
import DigitalClock from '../content/digitalClock'
import CurrentDate from '../content/currentDate'

let name = 'Ben'

function Welcome() {

    function greetingMessage(){
        var greeting = 'Good Afternoon'
        let time = new Date().getHours()
        if(time < 12) greeting = 'Good Morning';
        if(time > 18) greeting = 'Good Evening';
        return(
            <h2 className='greeting'>{greeting}, {name}</h2>
        )
    }

    return (
        <div className='welcome'>
            {greetingMessage()}
            <DigitalClock />
            <CurrentDate />
        </div>
    )
}

export default Welcome
