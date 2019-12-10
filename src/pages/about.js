import React from 'react';
import Sidebar from '../components/Sidebar';
import { Link } from 'gatsby'

function About() {
    const data = {
        'title': "Hello, I'm Chinweike Jude Obiejesi",
        'info': "I am a Front-end Developer, Technical Content Writer building beautiful responsive JamStack web applications",
        'social': {
            "facebook": "https://www.facebook.com/obiejesi.johnbosco",
            "twitter": "https://twitter.com/Chinweike_Dev",
            "github": "https://github.com/JaybeeClassical",
            "meduim": "https://medium.com/@johnboscoobiejesi",
            "gmail": "https://mail.google.com/mail/u/0/#inbox",
            "stackoverflow": "https://stackoverflow.com/users/10690238/jude-obiejesi",
            "dev": "https://dev.to/jude_johnbosco"
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link
                        className="btn btn-outline-light rounded-pill mx-5 my-3"
                        to="/">
                        Back to Home
                    </Link>
                    <Sidebar data={data} />
                </div>

                <div className="col-lg-8">
                    <div className="articles my-5 text-center">
                        <h4>Hello it's your guy here</h4>
                        <p>Hello, i know by now you should have known my name right? ): <br />
                            I'm a Front-end Developer and Technical Content Writer based in Lagos Nigeria, building amazing
                            front-end applications. I have been coding for a few years now.
                        </p>
                        <div className="text-left">
                            <h4>Tools and Frameworks i use</h4>
                            <ul>
                                <li>VsCode</li>
                                <li>Git/Github</li>
                                <li>Windows OS</li>
                                <li>Chrome and Brave Browser (personal preference)</li>
                                <li>JavaScript</li>
                                <li>Reactjs</li>
                                <li>Gatsbyjs</li>
                                <li>Wordpress</li>
                                <li>Contentful</li>
                                <li>HTML & CSS</li>
                                <li>Bootstrap & React-Boostrap</li>
                                <li>Cloudinary</li>
                                <li>Netlify</li>
                            </ul>
                        </div>
                        <p>Over the years i have been improving myself as much as possible with new technologies
                            and try as much to update my repo via github from time to time. I Love travelling a lot, listen to
                            Classical Songs and Orchestra with other songs too (Just love musics and beats). .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;

