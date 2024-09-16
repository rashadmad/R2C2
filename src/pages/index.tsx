import React from "react";

//sections
import WhoWeServe from "./sections/whoWeServe";
import AsideDonate from "./sections/asideDonate";
import ServicesCallToAction from "./sections/callToAction";
import MainContent from "./sections/MainContent";
import Layout from "../components/Layout"
import SEO from "../components/seo";
import CallToAction from "./sections/callToAction";

const HomePage: React.FC = () => (
  <Layout>
    <SEO title="R2C2 | Home" description="Welcome to The Re-imaging Roseland Community Collective" />
    <MainContent />
    <WhoWeServe />
    <AsideDonate />
    <CallToAction />
  </Layout>
);

export default HomePage;
