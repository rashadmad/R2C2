import React from "react";
import copyData from "../../data/copyData";
import ServiceCard from "../../components/ServiceCard";

const Services: React.FC = () => (
  <section>
    <div className="flex min-h-screen mx-auto flex-col">
      <div className="max mx-auto max-w-2xl mt-20">
        <div className="text-center bg-sky-500 p-6 rounded-lg">
          <h1 className="text-5xl roboto-bold font-bold tracking-tight text-white mb-6">
            <div className="yellowtail-regular text-5xl mb-2">
              {copyData.Initiatives.decorativeHeader}
            </div>
            <div className="inline">{copyData.Initiatives.title}</div>
            <hr className="m-5 border-white" />
          </h1>
          <p className="lato-regular m-5 mb-20 text-lg leading-8 text-white">
            {copyData.Initiatives.description}
          </p>
        </div>
      </div>
      <div className="flex mb-10 gap-x-6 items-center justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 md:px-20 text-slate-700">
          {copyData.Services && copyData.Services.map((service, index) => (
            <div key={index}>
              <ServiceCard
                imgSrc={service.imgSrc}
                icon={service.icon}
                title={service.title}
                description={service.description}
                altTag={service.altTag}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
