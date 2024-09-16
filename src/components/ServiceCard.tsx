import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPeace } from "@fortawesome/free-solid-svg-icons";

const ServiceCard: React.FC<{
  icon: any;
  imgSrc: string;
  title: string;
  description: string;
}> = ({ icon,imgSrc, title, description }) => (
  <div className="max-w-sm">
    <div className="relative">
      <img className="rounded-lg w-full size-60 ml-5" src={imgSrc}></img>
    </div>
    <div className="p-4 w-full grid-cols-2">
      <div className="pl-6">
        <h2 className="roboto-bold text-xl font-bold tracking-tight text-white pb-2 mb-3 slate-400 ">
        <FontAwesomeIcon className="fa-lg mr-2 mt-0 mb-0 text-white" icon={icon} />{title}
        </h2>
        <p className="leading-relaxed text-base max-w-lg text-white">{description}</p>
      </div>
    </div>
  </div>
); 

export default ServiceCard;

