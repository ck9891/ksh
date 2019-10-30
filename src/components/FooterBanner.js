import React from "react";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby"

const FooterBanner = ({data}) => {
  return (
    <banner className="bg-gray-800 relative">
      <Img
        // className="hero-banner"
        fluid={data.file.childImageSharp.fluid}
        alt=""
      />
      <div className="hero-banner-content text-center">
        <Link to="/apply" className="bg-blue-200 text-2xl font-bold mb-0 p-3">Apply Now</Link>
      </div>
    </banner>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "banner3.jpg" }) {
      childImageSharp {
        fluid(duotone: { highlight: "#bee3f8", shadow: "#00001f" },maxHeight:150, maxWidth:900, quality: 99
  ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default FooterBanner
