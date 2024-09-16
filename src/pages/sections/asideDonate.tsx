import React from "react";
import Donate from "../../components/Donate";
import MockData from "../../data/copyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeace, faDove } from "@fortawesome/free-solid-svg-icons";
import Brand from "../../components/Brand";

const AsideDonate: React.FC = () => {
  return (
    <aside className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3817.JPG"
          className="h-full w-full object-cover object-center aside"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative mx-auto flex max-w-l flex-col items-center text-center">
      
        <h2 className="roboto-bold text-5xl font-bold tracking-tight text-white sm:text-4xl">
          Be Apart &nbsp; 
          <FontAwesomeIcon className="fa-xs margin-t-5 text-white" icon={faPeace} />f The Movement
        </h2>
        <p className="lato-regular border-b-2 pb-10 border-sky-400 text-white fa-xl m-5 tracking-tight">For A Safer & Greater Roseland.</p>
        <p className="text-white max-w-md mb-3">We are inviting people who care about the Roseland community. People who seek to invest in holistic community-focused initiatives targeted to stem the tide of violence in Chicago.</p>
        <div className="m-5">
          <Donate colorStyleStandard={true} />
        </div>
      </div>
    </aside>
  );
};

export default AsideDonate;
