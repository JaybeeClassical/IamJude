import React from 'react'
import { Link } from 'gatsby'

const Portfolio = () => {
    return (
        <div className="Container">
            <div className="row">
                <h3>React</h3>
                <h3>Wordpress</h3>
                <h3>JavaScript</h3>
                <h3>Gatsby</h3>
                <h3>HTML/CSS</h3>
            </div>
            <Link
                className="btn btn-outline-light rounded-pill mx-5 my-3"
                to="/">
                Back to Home
            </Link>
        </div>
    )
}

export default Portfolio
