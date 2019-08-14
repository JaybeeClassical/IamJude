import React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
        <div>
            <h2>About me</h2>
            <Link
                className="btn btn-outline-light rounded-pill mx-5 my-3"
                to="/">
                Back to Home
            </Link>
        </div>
    )
}

export default About 