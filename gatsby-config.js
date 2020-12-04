/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
		title: `Blank starter Gatsby`,
	},
    plugins: [
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/posts/`,
            },
        },
    ],
}

// To run:
// npm install gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react node-sass@4.14.1 gatsby-plugin-sass gatsby-plugin-react-helmet react-helmet gatsby-plugin-styled-components styled-components babel-plugin-styled-components gatsby-source-filesystem