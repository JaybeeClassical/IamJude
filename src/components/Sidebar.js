import React from 'react'
import SocialLinks from './SocialLinks'

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
            <SocialLinks socialLinks={socialLinks} />
            <hr />
        </div>
    )
}

export default Sidebar