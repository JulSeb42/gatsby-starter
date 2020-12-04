import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Header from "../components/header"



const shortcodes = { Link } // Provide common components here

export default function BlogPost({ data: { mdx } }) {
    return (
        <div>
            <Header pageTitle={mdx.frontmatter.title} />
            <h1>{mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </div>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
            }
        }
    }
`