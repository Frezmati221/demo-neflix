import React, { useEffect, useState } from "react";
import IntroCountDown from "./IntroCountDown";

const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;

const getPartsofTimeDuration = (duration) => {
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor((duration % msInADay) / msInAHour);
    const minutes = Math.floor((duration % msInAHour) / msInMinute);
    const seconds = Math.floor((duration % msInMinute) / msInSecond);

    return { days, hours, minutes, seconds };
};

const Timer = (endDateTime) => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timeout = setTimeout(() => {
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return () => {
            clearTimeout(timeout);
        };
    }, [time]);

    const now = Date.now(); // Number of milliseconds from begining of time

    const future = new Date(endDateTime.endDateTime); // The day we leave for Japan

    const timeDif = future.getTime() - now;
    const timeParts = getPartsofTimeDuration(timeDif);

    // const countDownTime = `${timeParts.days} Days ${timeParts.hours} Hours and ${timeParts.minutes} minutes and ${timeParts.seconds} seconds`;
    return (
        <>

            <IntroCountDown day={timeParts.days} hour={timeParts.hours} min={timeParts.minutes} sec={timeParts.seconds} />
            

            {/* {timeParts.days} */}







        </>
    );
};

export default Timer;