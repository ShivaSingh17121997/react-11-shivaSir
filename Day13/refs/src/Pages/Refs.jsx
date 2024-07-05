// FileName - App.js

import React, { useRef } from "react";
import { useState } from "react";

function Refs() {
    const [input, setInput] = useState("")



    const inputRef = useRef(null);



    function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${inputRef.current.value}`);
        console.log(inputRef.current.value)
    }

    return (
        <div className="App">
            <h1 className="geeks">GeeksForGeeks</h1>
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>


                <img src="" alt="" />

                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                />

                {/* // directly manipulating data with dom */}
                {/* uncontrolled componet */}



                <button type="submit">Submit</button>
            </form>
            <div>
                {/* manipulating data with react */}
                {/* // controlled component */}

                <input value={input} onChange={() => setInput(e.target.value)} type="text" />

            </div>
        </div>




    );
}

export default Refs;
