import React, { useCallback, useState } from 'react'

export default function UseCallBack() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = useCallback((e) => {
        const { value, name } = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value
        }))

    }, [])


    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        console.log("form submittd:", formData);
        setFormData({ username: '', password: '' });

    }, [formData])


    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input name="username" type="text" placeholder='userName' value={formData.username} onChange={handleChange} />

                <input type="password" name="password" value={formData.password} onChange={handleChange} />

                <button>submit</button>


            </form>

        </div>
    )
}
