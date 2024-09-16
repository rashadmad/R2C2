import React from "react";

//sections
//import WhoWeServe from "./sections/whoWeServe";
import AsideDonate from "./sections/asideDonate";
//import MainContent from "./sections/MainContent";
import MobileMenu from "../components/MobileMenu";
import Layout from "../components/Layout"
import SEO from "../components/seo";
import Teams from "./sections/teams";
import Services from "./sections/services";
import Programs from "./sections/Programs";
import NewsHero from "./sections/NewsHero";
import Testimonials from "./sections/Testimonials";

//<SEO title="Initiatives" description="initiatives" />

const news: React.FC = () => (
  <Layout>
    <SEO title="R2C2 | News" description="Keep up with whats going on at R2C2" />
    <NewsHero />
    <AsideDonate />
    <Testimonials />
  </Layout>
);

export default news;
