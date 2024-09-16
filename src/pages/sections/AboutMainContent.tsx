import React from "react";
import Donate from "../../components/Donate";
import CopyData from "../../data/copyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Teams from "./teams";
import copyData from "../../data/copyData";
import ServiceCard from "../../components/ServiceCard";
import StepsCard from "../../components/StepsCard";

interface CopyProps {
  id: number;
  name: string;
  category: string;
  description: string;
  imgSrc: string;
  gradientFrom: string;
  gradientTo: string;
}

const AboutMainContent = () => (
<section>
    <div className="flex min-h-screen mx-auto flex-col">
      <div className="max mx-auto max-w-2xl mt-5">
        <div className="text-center">
          <h1 className="text-5xl roboto-bold width-100 font-bold tracking-tight text-white m-6">
            <div className="yellowtail-regular text-5xl m-2">{copyData.TeamCopy.aboutSecondHeader}</div>
            <div className="inline">{copyData.TeamCopy.aboutHeader}</div>
            <hr className="m-5" />
          </h1>
          <p className="pretty lato-regular m-5 mb-5 text-lg leading-8 text-white">
            {copyData.whoDescription}
          </p>
        </div>
      </div>
      <div className="container px-5 pb-15 mx-auto">
        <div className="flex flex-wrap -m-4">
          {copyData.TeamMembers.map((member: CopyProps) => (
            <div key={member.id} className="p-4 sm:w-1/3">
              <div className={`md:h-full rounded-xl shadow-cla-blue bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} overflow-hidden p-2`}>
                <img className="aspect-[3/2] rounded-t-2xl object-cover lg:h-[310px] md:h-36 w-full drop-shadow-md" src={member.imgSrc} alt="team member" />
                <div className="p-6 bg-slate-200 h-[250px] rounded-b-lg width-full drop-shadow-md">
                <h2 className="sm:text-sm md:text-base roboto-bold font-bold text-xl text-gray-600 mb-3">{member.name}</h2>
                <h3 className="text-center flex p-1 tracking-widest text-xs title-font font-medium text-white mb-1 bg-sky-500 rounded-lg max-w-[110px]">{member.category}</h3>   
                  <p className="sm:text-sm md:text-base leading-relaxed mb-3">{member.description}</p>
                  <div className="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );

  export default AboutMainContent