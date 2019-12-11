const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
  },
  plugins: [],
}

module.exports = {
  siteMetadata: {
    title: `Front-end Developer`,
    description: `This is the official portfolio and blog site of Obiejesi Chinweike`,
    author: `Chinweike Jude Obiejesi`,
    siteUrl: `https://www.iamjude.xyz/`,
    keywords: [
      "Obiejesi",
      "Chinweike",
      "Jude",
      "Tech Content Writer",
      "React developer",
      "Front-end Engineer",
    ],
    social: {
      twitter: `chinweike_dev`,
      github: `jaybeeClassical`,
      email: `johnboscoobiejesi@gmail.com`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.iamjude.xyz',
        sitemap: 'https://www.iamjude.xyz/sitemap.xml',
        policy: [{
          userAgent: "*", allow: "/",
        }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/works`,
        name: `works`,
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `src/images/avataaars.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://techibytes.us19.list-manage.com/subscribe/post?u=f145cdcf5ab6541b1627ffb85&amp;id=cdea2ed04c",
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // `@contentful/rich-text-react-renderer`


    // `Disqus plugin`
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `iamjude.xyz`
      }
    },

  ],
}
