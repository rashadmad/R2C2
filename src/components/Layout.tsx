import React, { useState, ReactNode } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}   

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-sky-500 border-8 border-white">
      <Header />
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
