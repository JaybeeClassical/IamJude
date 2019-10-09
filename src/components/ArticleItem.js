import React from 'react'
import { Link } from 'gatsby';
import { CommentCount } from 'disqus-react';

export const disqusConfig = ({ slug, title }) => ({
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
})

const ArticleItem = ({ title, description, slug }) => {

    const commentIcon = "https://img.icons8.com/material-sharp/24/80CBC4/speech-bubble-with-dots.png"

    return (
        <div className="article-item mb-4">
            <hr className="bg-info" />

            <Link to={slug} className="link">
                <h2>{title}</h2>
            </Link>
            <p>{description}</p>
            <span><img src={commentIcon} alt="Comment Icon" className="mr-2" />
                <CommentCount {...disqusConfig({ slug, title })} />
            </span>
            <hr className="bg-info" />
        </div>
    )
}

export default ArticleItem

