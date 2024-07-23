



import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState({});

    // console.log(error, "error object")


    const handleSubmit = (e) => {
        e.preventDefault();


        let errorObj = {}; //  email : "Email is required"


        // console.log(errorObj, "error in form submit")


        if (!email) {
            errorObj.email = "Email is required"
        }


        if (!password) {
            errorObj.password = "Password is required"
        } else if (password.length < 6) {
            errorObj.password = "Password should be at least 6 characters"
        }



        if (Object.keys(errorObj).length > 0) {
            setError(errorObj)
        } else {
            console.log(email, password)
            setEmail("")
            setPassword("")


            toast.success("Data added sucessfully!", {
                position: "top-center",
            });

            setError({})
        }





    }

    return (
        <div>

            <form className='form-container' onSubmit={handleSubmit} >

                <label >

                    <input className='form-input' type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {error.email && < p style={{ color: "red" }} > {error.email}</p>}

                </label>   <br /> <br />

                <label >
                    <input className='form-input' type="password" placeholder='Enter your password ' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error.password && <p style={{ color: "red" }} >{error.password}</p>}
                </label>
                <br /> <br />

                <button className='form-button' >Submit</button>

            </form>

            {/* event bubbling */}

            <ToastContainer />
        </div >
    )
}
