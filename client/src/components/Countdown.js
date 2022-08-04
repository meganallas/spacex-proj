import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { Loader, Statistic } from 'semantic-ui-react'

let apiData;
let apiDataRocket;
let countDownDate;
let showCount = false;
const apiUrl = 'https://api.spacexdata.com/v4/launches/next';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        apiData = data;
        let rocket = apiData.rocket;
        let apiUrlRocket = 'https://api.spacexdata.com/v4/rockets/' + rocket;
        fetch(apiUrlRocket)
            .then(res => res.json())
            .then(rocketData => {
                apiDataRocket = rocketData;
            })
    })


function Countdown({ setCountdown }) {

    let dt = "2022-01-01T00:00:00-04:00";
    const [time, setTime] = useState("");
    Moment.locale('en');

    if (apiData !== undefined) {
        dt = apiData.date_local;
        //dt = "2021-05-13T12:00:00-04:00";
        countDownDate = new Date(Moment(dt).format()).getTime();
    }

    useEffect(() => {
        let isCancelled = false;
        countDownDate = new Date(Moment(dt).format()).getTime();

        // update every second
        let x = setInterval(function () {

            //get todays date and time
            let now = new Date().getTime()

            // find the distance between now and count down date
            let distance = countDownDate - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            if (!isCancelled) {
            setTime(
                <Statistic.Group size='large' widths='four'>
                    <Statistic>
                        <Statistic.Value>{days}</Statistic.Value>
                        <Statistic.Label>days</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{hours}</Statistic.Value>
                        <Statistic.Label>hours</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{minutes}</Statistic.Value>
                        <Statistic.Label>minutes</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{seconds}</Statistic.Value>
                        <Statistic.Label>seconds</Statistic.Label>
                    </Statistic>
                    </Statistic.Group>
            )};

            if (apiData !== undefined) {
                showCount = true;
            }

            if (distance < 0) {
                setTime(<div className="statusTxt">Launching</div>)
            }
            if (distance < -60000){
                clearInterval(x);
                setTime(<div className="statusTxt">Pending next schedule</div>)
                setCountdown(true);
                setTimeout(() => {
                    setCountdown(false)
                }, 15000);
            }
        }, 1000);

        return () => {
            isCancelled = true;
          };

    }, []);

    return (
            <div className="countdownDiv">
                {showCount === false ? (
                    <Loader active />
                ) : (
                    <div className="countdown">
                        {time}
                        <p className="rocketName">{apiDataRocket.name}</p>
                    </div>
                )}
            </div>
    )
}

export default Countdown;