import React from 'react'

export default function Card({ name, id, key }) {

    
    console.log(name, id, key)


    return (<div key={key} >
        <p>{id}</p>
        <p>{name} </p>
    </div>)

}
