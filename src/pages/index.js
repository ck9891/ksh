import React from "react";
import Img from 'gatsby-image';
import { graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage({data}) {
  return (

    <Layout>
      <SEO
        title="Home"
        keywords={[`Staffing`, `Employment`, `Permanent`, `Temporary`]}
      />
      <div className="bg-gray-800 relative">
      <Img
        className="hero-banner"
        fluid={data.file.childImageSharp.fluid}
        alt=""
      />
        <div className="hero-banner-content text-center">
          <h2 className="bg-blue-400 text-2xl font-bold inline-block my-8 p-3">
            Welcome to KSH Staffing Solutions Inc.
          </h2>
        </div>
      </div>
      <section className="text-center max-w-5xl mx-auto py-4">
        <p className="leading-loose text-xl">
          KSH Staffing Solutions offers temporary and temporary-permanent employment opportunities. Our long standing relationships with many great companies with excellent reputations can connect you to amazing assignments that suit your experience, skills schedule and lifestyle.
        </p>
      </section>
    </Layout>
  );
}
export const query = graphql`
  query {
    file(relativePath: { eq: "banner2.jpg" }) {
      childImageSharp {
        fluid(maxHeight:300, maxWidth:900, quality: 99
  ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage;
