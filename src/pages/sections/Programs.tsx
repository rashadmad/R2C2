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
} from "@fortawesome/free-solid-svg-icons";
import copyData from "../../data/copyData";
import ServiceCard from "../../components/ServiceCard";
import Donate from "../../components/Donate";
import StepsCard from "../../components/StepsCard";


const Programs: React.FC = () => (
  <section>
    <div className="flex min-h-screen mx-auto flex-col">
      <div className="bg-white pt-10">
      <h1 className="text-5xl roboto-bold width-100 font-bold tracking-tight text-sky-500 m-6">
        <div className="text-center m-1">Our Program</div>
      </h1>
        <div className="flex items-center justify-center h-screen">
          <ul className="max-w-5xl mx-auto">
            {copyData.programs.map((program, index) => (
                <StepsCard
                  key={index}
                  name={program.name}
                  description={program.description}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
    <div></div>
  </section>
);

export default Programs;