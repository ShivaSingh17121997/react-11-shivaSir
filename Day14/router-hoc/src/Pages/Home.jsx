import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum iure consequatur accusantium repudiandae dolorum mollitia dignissimos repellat odio eos, exercitationem recusandae, ratione delectus perferendis nihil obcaecati maiores eaque. Sint?</p>

            <Link to="/singleproduct" >
                <button>go on Single product page</button>
            </Link>

        </div>
    )
}
