import React from "react";

//sections
import Layout from "../components/Layout"
import SEO from "../components/seo";
import AboutMainContent from "./sections/AboutMainContent";
import AboutWhere from "./sections/AboutWhere";
import Aside from "./sections/asideDonate";

//<SEO title="Initiatives" description="initiatives" />

const about: React.FC = () => (
  <Layout>
    <SEO title="R2C2 | About" description="Learn more about how we service our participants" />
    <AboutMainContent />
    <Aside/>
    <AboutWhere />
  </Layout>
);

export default about;
