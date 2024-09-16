import React from "react";
import Donate from "../../components/Donate";
import copyData from "../../data/copyData";

interface CopyProps {
  id: number;
  name: string;
  category: string;
  description: string;
  imgSrc: string;
  gradientFrom: string;
  gradientTo: string;
}


const Teams: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
        <div className="flex flex-wrap -m-4">
          {copyData.TeamMembers.map((member: CopyProps) => (
            <div key={member.id} className="p-4 md:w-1/3">
              <div className={`h-72 rounded-xl shadow-cla-blue bg-gradient-to-r ${member.gradientFrom} ${member.gradientTo} overflow-hidden p-2`}>
                <img className="drop-shadow-md" src={member.imgSrc} alt="team member" />
                <div className="p-6 bg-slate-200 h-[250px] rounded-b-lg width-full drop-shadow-md">
                  <h3 className="text-center flex p-3 tracking-widest text-xs title-font font-medium text-white mb-1 bg-sky-500 rounded-lg max-w-[110px]">{member.category}</h3>
                  <h2 className="roboto-bold font-bold text-xl text-gray-600 mb-3">{member.name}</h2>
                  <p className="leading-relaxed mb-3">{member.description}</p>
                  <div className="flex items-center flex-wrap "></div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default Teams;
