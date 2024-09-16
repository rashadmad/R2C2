import React from "react";
import {
  faHandPeace,
  faHeart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import copyData from "../../data/copyData";
import Donate from "../../components/Donate";

const serviceData = [
  {
    icon: faHandPeace,
    title: copyData.service1Title,
    description: copyData.service1Description,
  },
  {
    icon: faHeart,
    title: copyData.service2Title,
    description: copyData.service2Description,
  },
  {
    icon: faUsers,
    title: copyData.service3Title,
    description: copyData.service3Description,
  },
];

const ServicesCallToAction: React.FC = () => (
  <div className="bg-white">
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl text-sky-500">
            Hear a word from 
            <br />
            The leader of R2C2
            <br />
            Steven Gates
          </h2>

          <div className="aspect-video">
            <video
              className="w-full h-full"
              src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/stevie+interviews+r2c2+.mp4"
              controls
              autoPlay={false} // This ensures the video does not play automatically
              preload="metadata" // Loads metadata without playing the video
            ></video>
          </div>
          <div className="mt-10">
            <Donate colorStyleStandard={false} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesCallToAction;
