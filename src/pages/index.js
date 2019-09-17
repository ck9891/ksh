import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`Staffing`, `Employment`, `Permanent`, `Temporary`]}
      />

      <section className="text-center">
        <img
          src={catAndHumanIllustration}
          className="block mx-auto w-1/2"
          alt="Cat and human sitting on a couch"
        />

        <h2 className="bg-blue-400 text-2xl font-bold inline-block my-8 p-3">
          Welcome to KSH Staffing Solutions Inc.
        </h2>

        <p className="leading-loose">
          KSH Staffing Solutions offers temporary and temporary-permanent employment opportunities. Our long standing relationships with many great companies with excellent reputations can connect you to amazing assignments that suit your experience, skills schedule and lifestyle.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
