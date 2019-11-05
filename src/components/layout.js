import React from 'react'
import Sidebar from './Sidebar'
import Subscribe from './mailChimpEmail';


function Layout({ children }) {
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
        < div className="container" >
            <div className="row">
                <div className="col">
                    <Sidebar data={data} />
                </div>
                <div className="col-lg-8">
                    <div className="articles my-5">
                        {children}
                    </div>
                </div>
            </div>

            <Subscribe />
        </div >
    )
}

export default Layout

