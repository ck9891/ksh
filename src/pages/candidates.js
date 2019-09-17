import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function CandidatesPage() {
  return (
    <Layout>
      <SEO
        title="Candidates"
        keywords={[`Staffing`, `Employment`, `react`, `tailwindcss`]}
      />
      <section className="flex flex-col items-center text-center mb-6">
        <h1 className="bg-blue-200 text-3xl font-bold mb-6 p-3 ">Candidates</h1>
      </section>
     <section className="flex">
        <div className="timeline">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi?</p>
        </div>
     </section>
    </Layout>
  );
}

export default CandidatesPage;
