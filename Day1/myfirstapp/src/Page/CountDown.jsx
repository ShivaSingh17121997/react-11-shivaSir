import React, { useEffect, useState } from 'react'

export default function CountDown() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        let countDown = setInterval(() => {
            if(seconds > 0){
                setSeconds(seconds-1);
            } 
            if(seconds === 0 ){
                if(minutes ===0 ){
                    clearInterval(countDown)
                }
            } else{
                setMinutes(minutes-1);
                setSeconds(59)
            }
            
        }, 1000);


        return () => {
            clearInterval(countDown)
        }
    },[minutes,seconds])

  return (
    <div>
        <h1>
            { minutes } : {seconds<10 }
        </h1>
    </div>
  )
}
