import React, { useRef, useState } from 'react'

export default function ControlledUncontrolled() {
    const [input, setInput] = useState("")

    // refs reference

    const refrence = useRef("");
    console.log(refrence.current)



    const handleForm = (e) => {
        e.preventDefault();
        console.log(input)

    }


    const handleRefData = () => {
        console.log(refrence.current)
        console.log(refrence.current)
    }

    return (
        //fragments
        <> 
            <form onSubmit={handleForm} >

                <input className='form-input' type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='enter name' />
                <button>submit</button>
                <button>submites</button>

            </form>

            <input type="text" ref={refrence} />
            <button onClick={handleRefData} >addref</button>




        </>
    )
}
