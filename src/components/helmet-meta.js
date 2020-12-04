import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function MetaHelmet(props) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title,
                    }
                }
            }
        `
    )
    return (
        <Helmet>
            <meta charset="UTF-8" />
            <title>{ props.pageTitle } | { data.site.siteMetadata.title }</title>
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={ props.description } />
            <meta name="author" content={ data.site.siteMetadata.author } />
            <meta property="og:title" content={ props.title } />
            <meta property="og:type" content={ data.site.siteMetadata.type } />
            <meta property="og:image" content={ data.site.siteMetadata.og_cover } />
            <meta property="og:site_name" content={ data.site.siteMetadata.title } />
            <meta property="og:url" content="" />
            <meta property="og:locale" content="en_GB" />
            <link rel="stylesheet" href="https://unpkg.com/fajny-css/css/fajny-icons.min.css" type="text/css" />
        </Helmet>
    );
}