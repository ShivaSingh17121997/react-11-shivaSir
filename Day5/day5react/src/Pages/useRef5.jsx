import React, { useEffect, useRef, useState } from 'react';

function TimerComponent() {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div>
            <p>Time elapsed: {seconds} seconds</p>
        </div>
    );
}

export default TimerComponent; 
