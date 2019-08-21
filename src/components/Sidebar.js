import React from 'react'
import SocialLinks from './SocialLinks'
import { Link } from 'gatsby'

const Sidebar = ({ data }) => {
    const title = data.title;
    const info = data.info
    const socialLinks = data.social

    return (
        <div className="sidebar my-5">
            <img
                width="200"
                className="rounded-circle mb-5 profile-img"
                alt="profile"
                src="https://pbs.twimg.com/profile_images/1115179633081815040/H7m30Dph_400x400.jpg" />
            <h2>{title}</h2>
            <p>{info}</p>
            <Link
                className="btn btn-outline-info rounded-pill mx-2 my-2"
                to="/404">
                About
            </Link>
            <Link
                className="btn btn-outline-info rounded-pill mx-2 my-2"
                to="/404">
                Portfolio
            </Link>
            <Link
                className="btn btn-outline-info rounded-pill mx-2 my-2"
                to="/404">
                Hire me
            </Link>
            <SocialLinks socialLinks={socialLinks} />
        </div>
    )
}

export default Sidebar