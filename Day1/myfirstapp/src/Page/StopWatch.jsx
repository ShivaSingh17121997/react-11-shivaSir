import React, { useState, useRef } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0); // Time in milliseconds
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const start = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
            }, 10);
        }
    };

    const stop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (time) => {
        const milliseconds = time % 1000;
        const seconds = Math.floor(time / 1000) % 60;
        const minutes = Math.floor(time / 60000) % 60;
        const hours = Math.floor(time / 3600000);

        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds
                .toString()
                .padStart(3, '0')}`;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Stopwatch</h1>
            <div className="text-6xl font-mono mb-8">{formatTime(time)}</div>
            <div className="space-x-4">
                <button
                    onClick={start}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Start
                </button>
                <button
                    onClick={stop}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Stop
                </button>
                <button
                    onClick={reset}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;
