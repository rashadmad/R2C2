import React from "react";


import AsideDonate from "./sections/asideDonate";
import Layout from "../components/Layout"
import SEO from "../components/seo";
import Services from "./sections/services";
import Programs from "./sections/Programs";

const initiatives: React.FC = () => (
  <Layout>
    <SEO title="R2C2 | Initiatives" description="Learn more about how we service our participants" />
    <Services />
    <AsideDonate />
    <Programs />
  </Layout>
);

export default initiatives;
