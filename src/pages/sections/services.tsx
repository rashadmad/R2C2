import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDown,
  faArrowDown,
  faDownLong,
  faHandPeace,
  faHeart,
  faUsers,
  faPeace,
} from "@fortawesome/free-solid-svg-icons";
import copyData from "../../data/copyData";
import ServiceCard from "../../components/ServiceCard";
import Donate from "../../components/Donate";
import StepsCard from "../../components/StepsCard";


const Services: React.FC = () => (
  <section>
    <div className="flex min-h-screen mx-auto flex-col">
      <div className="max mx-auto max-w-2xl mt-20">
        <div className="text-center bg-sky-500">
          <h1 className="text-5xl roboto-bold width-100 font-bold tracking-tight text-white m-6">
            <div className="yellowtail-regular text-5xl m-2">{copyData.Initiatives.decorativeHeader}</div>
            <div className="inline">{copyData.Initiatives.title}</div>
            <hr className="m-5" />
          </h1>
          <p className="pretty lato-regular m-5 mb-20 text-lg leading-8 text-white">
          {copyData.Initiatives.description}
          </p>
        </div>
      </div>
      <div className="flex mb-10 gap-x-6 items-center justify-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 px-20 md:px-20 text-slate-700">
          {copyData.Services.map((service, index) => (
            <div> 
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                icon={service['icon']}
                title={service.title}
                description={service.description} 
              />
            </div> 
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
