import React, { useState } from 'react';
import "../App.css";
import Countdown from '../components/Countdown';

function Home() {
    const [countdown, setCountdown] = useState(false)
    return (
        <div className='App'>
            <div className="countdownDiv">
            <h1 className = "page-title">Upcoming Launch</h1>
            <p className = "sub-title">(est)</p>
                {countdown}
                <Countdown setCountdown={setCountdown} />
            </div>
        </div>
    )
}

export default Home;