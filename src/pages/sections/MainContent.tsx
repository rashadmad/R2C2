import React from "react";
import Donate from "../../components/Donate";
import CopyData from "../../data/copyData";


const MainContent = () => (
    <main className="landingPageBG relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80 landingPageColor"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="gradient-overlay transform-gpu overflow-hidden blur-3xl"></div>
        <div className="text-center">
          <h1 className="text-5xl roboto-bold width-100 font-bold tracking-tight text-white">
            <div className="yellowtail-regular text-5xl">Welcome to the</div>
            <div className="inline">Re-imagining{" "}</div>
            <div className="inline">Roseland{" "}</div>
            <div className="inline">Community{" "}</div>
            <div className="inline">Collective</div> 

            <hr className="m-5" />
          </h1>
          <p className="pretty lato-regular mt-1 text-lg leading-8 text-white">
            {CopyData.Home.topHeader}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Donate colorStyleStandard={true} /> 
            <a
              href="#"
              className="text-white p-3 hover:text-white-300 text-l"
            >
              Learn more
              <span>&#8594;</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      />
    </main>
  );

  export default MainContent