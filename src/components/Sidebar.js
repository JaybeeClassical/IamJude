import React from 'react'
import SocialLinks from './SocialLinks'

const Sidebar = ({ data }) => {
    const title = data.title;
    const info = data.info
    const socialLinks = data.social

    return (
        <div className="sidebar my-5">
            <img
                width="180"
                className="rounded-circle mb-5 profile-img"
                alt="profile"
                src="https://images2.jiji.ng/29921708_me_475x479.jpg" />
            <h2>{title}</h2>
            <p>{info}</p>
            <SocialLinks socialLinks={socialLinks} />
        </div>
    )
}

export default Sidebar