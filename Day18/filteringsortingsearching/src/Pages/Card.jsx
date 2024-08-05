import React from 'react'

export default function Card({ category, description, image, price, rating, title }) {
    return (
        <div>
            <img width="200px" src={image} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
            <p>{category}</p>
            <p>{description}</p>
            <p>{rating.rate}</p>
        </div>
    )
}
