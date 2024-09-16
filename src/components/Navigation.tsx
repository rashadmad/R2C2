import React from "react";
import { Link } from "gatsby";
import copy from "../data/copyData";

interface NavigationItem {
  name: string;
  href: string;
}

const Navigation: React.FC<{
  name: string;
  href: string;
}> = ({name, href}) => (
    <div className="bg-white hidden lg:flex lg:gap-x-12">
      {copy.navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="text-base font-semibold leading-6 text-sky-400 hover:text-slate-500"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

export default Navigation;