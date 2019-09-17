import React from 'react';
import TagList from './TagList';
import { Helmet } from 'react-helmet'
import { DiscussionEmbed } from 'disqus-react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Link, graphql } from 'gatsby';
/*import { FaSignLanguage } from 'react-icons/fa';*/

function ArticleContent(props) {

    //articleData
    const documentJson = props.data.contentfulArticle.content.json.content
    const title = props.pageContext.title
    const tag = props.data.contentfulArticle.tag
    const timeStamp = props.pageContext.timeStamp
    const slug = props.pageContext.slug
    console.log(props.data)

    //Creates a rich text document
    const richTextDocument = {
        nodeType: 'document',
        data: {},
        content: [
            ...documentJson //adds the content to the document
        ]
    };

    //For Rendering Embedded Assets in Contentful
    const Image = ({ node }) => {
        const src = node.data.target.fields.file["en-US"].url

        return <img src={src} className="img-fluid" alt="mua" />

    }

    //Config to Display Images
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => <Image node={node} />
        }
    };

    //the discuss 
    // const disqusShortName = 'process.env.GATSBY_DISQUS_NAME'
    // const disqusConfig = {
    //     identifier: article.markdownRemark.article, // you can define anything as "identifier" for each blog post
    //     title: article.markdownRemark.frontmatter.title,
    //     url: 'https://iamjude.xyz' + article.markdownRemark.frontmatter.path,
    // }
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: slug, title },
    }
    console.log(process.env.GATSBY_DISQUS_NAME)

    //For Better TimeStamp
    function getMonth(month) {
        switch (month) {
            case "01":
                return "Jan"
                break;
            case "02":
                return "Feb"
                break;
            case "03":
                return "Mar"
                break;
            case "04":
                return "Apr"
                break;
            case "05":
                return "May"
                break;
            case "06":
                return "Jun"
                break;
            case "07":
                return "Jul"
                break;
            case "08":
                return "Aug"
                break;
            case "09":
                return "Sep"
                break;
            case "10":
                return "Oct"
                break;
            case "11":
                return "Nov"
                break;
            case "12":
                return "Dec"
                break;
            default:
                return ""
        }
    }



    // Generates A Readable Timestamp
    function getTimestamp(timeStamp) {
        let dateStamp = timeStamp.split("T")[0]
        dateStamp = dateStamp.split("-")
        return dateStamp[2] + " " + getMonth(dateStamp[1]) + " " + dateStamp[0]
    }


    return (
        <div>
            <Link
                className="btn btn-outline-light rounded-pill mx-5 my-3"
                to="/">
                Back to Home
            </Link>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className="article-content">
                <span className="display-4"><h2>{title}</h2></span>
                <div className="mt-5">
                    {
                        documentToReactComponents(richTextDocument, options)
                    }
                </div>
                <div>
                    Tags
                     <TagList data={tag} />
                    <br />
                    <br />
                    <span className="font-italic h5">Published {getTimestamp(timeStamp)} </span>
                    <DiscussionEmbed {...disqusConfig} />
                </div>

            </div>
        </div>

    )

}

export default ArticleContent

export const pageQuery = graphql`
query getContentBySlug($slug : String!){
	contentfulArticle(slug : {eq : $slug}){
    content{
      json
    }
    tag
  }
}
`