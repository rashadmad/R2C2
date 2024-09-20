import React from "react";
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

const TeamMemberCard: React.FC<CopyProps> = ({ name, category, description, imgSrc, gradientFrom, gradientTo }) => (
  <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
    <div className={`max-h-lvh rounded-xl shadow-cla-blue min-h-64 bg-gradient-to-r ${gradientFrom} ${gradientTo} overflow-hidden p-2`}>
      <img className="drop-shadow-md w-full h-full object-cover" src={imgSrc} alt={`${name}`} />
      <div className="p-6 bg-slate-200 h-{1250px} rounded-b-lg drop-shadow-md">
        <span className="block text-center tracking-widest text-xs font-medium text-white mb-1 bg-sky-500 rounded-lg max-w-[110px] mx-auto py-1">
          {category}
        </span>
        <h2 className="text-lg md:text-xl roboto-bold font-bold text-gray-600 mb-3">{name}</h2>
        <p className="leading-relaxed mb-3 text-sm sm:text-xs">{description}</p>
      </div>
    </div>
  </div>
);


const Teams: React.FC = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap -m-4">
        {copyData.TeamMembers.map((member: CopyProps) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Teams;
