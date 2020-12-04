import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"

export default function Home({ data }) {
    const { edges: posts } = data.allMdx
    return (
        <div>
            <Header pageTitle="Home" />
            <h1>{data.site.siteMetadata.title}</h1>
            
            {posts.map(({ node: post }) => (
                <div key={post.id}>
                    <Link to={post.fields.slug}>
                        <p>{post.frontmatter.title}</p>
                        <p>{post.frontmatter.position}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export const pageQuery = graphql`
    query Home {
        allMdx {
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }

        site {
            siteMetadata {
                title
            }
        }
    }
`