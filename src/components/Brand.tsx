import { Link } from "gatsby";
import React from "react";

interface BrandProps {
  colorStyleStandard?: boolean;
}

const onWhiteBackground = "text-4xl roboto-bold font-bold tracking-tight text-sky-400 bg-white";
const onBlueBackground = "text-4xl roboto-bold font-bold tracking-tight text-white bg-white";

const Brand: React.FC<BrandProps> = ({ colorStyleStandard = false }) => {
  return (
    <Link to="#" className="-m-1.5 p-1.5 roboto-bold">
      <span className="sr-only">R2C2</span>
      <h1 className={colorStyleStandard ? onBlueBackground : onWhiteBackground}>
        R<sup className="text-slate-500 italic">2</sup>C
        <sup className="text-slate-500 italic">2</sup>
      </h1>
    </Link>
  );
};

export default Brand;
