import React from 'react'
import { FaFacebook as Facebook, FaTwitter as Twitter, FaGithub as Github, FaMedium as Meduim, FaEnvelope as Gmail, FaStackOverflow as Stackoverflow, FaDev as Dev } from 'react-icons/fa';

function SocialLinks({ socialLinks }) {
    return (
        <div>
            <a className="icon" href={socialLinks.facebook}><Facebook /></a>
            <a className="icon" href={socialLinks.twitter}><Twitter /></a>
            <a className="icon" href={socialLinks.github}><Github /></a>
            <a className="icon" href={socialLinks.meduim}><Meduim /></a>
            <a className="icon" href={socialLinks.gmail}><Gmail /></a>
            <a className="icon" href={socialLinks.stackoverflow}><Stackoverflow /></a>
            <a className="icon" href={socialLinks.dev}><Dev /></a>
        </div>
    )
}

export default SocialLinks
