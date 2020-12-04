import React, {useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import MetaHelmet from "./helmet-meta"
import styled from "styled-components"

export default function Header(props) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
    return (
        <header>
            <MetaHelmet pageTitle={props.pageTitle} />
            <Link to="/">Home</Link>
        </header>
    );
}