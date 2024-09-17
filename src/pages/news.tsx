import React from "react";

//sections
import AsideDonate from "./sections/asideDonate";
import Layout from "../components/Layout"
import SEO from "../components/seo";
import NewsHero from "./sections/NewsHero";
import Testimonials from "./sections/Testimonials";


const news: React.FC = () => (
  <Layout>
    <SEO title="R2C2 | News" description="Keep up with whats going on at R2C2" />
    <NewsHero />
    <AsideDonate />
    <Testimonials />
  </Layout>
);

export default news;
