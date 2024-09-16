import { faArrowDown, faHandshakeAngle, faHouseUser, faTrophy, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const stepsCard: React.FC<{
  name: string;
  description: string;
}> = ({ name, description }) => (
  <li className="mb-[54px] min-h-[200px] z-40 relative text-center border-4 bg-white border-sky-500 rounded-lg border-rad mx-10 m-4">
    <h3 className="text-3xl roboto-bold bg-sky-500 roboto-bold text-white p-1 text-left">
    
    {(() => {
        switch (name) {
          case 'Engagement':
            return <FontAwesomeIcon className="text-white mx-2" icon={faHandshakeAngle} />
          case 'Essentials':
            return <FontAwesomeIcon className="text-white mx-2" icon={faHouseUser} />
          case 'Exploration':
            return <FontAwesomeIcon className="text-white mx-2" icon={faUserEdit} />
          case 'Execution':
            return <FontAwesomeIcon className="text-white mx-2" icon={faTrophy} />
          default:
            return null
        }
      })()}
      {name}
    </h3>
    <p className="text-left m-5 text-pretty md:text-base sm:text-xs sm:text-font-bold lg:text-base xs:text-xs xs:text-font-bold">{description}</p>
    <FontAwesomeIcon
      className="absolute hidden md:inline-block top-[190px] right-7 fa-4x margin-5 text-sky-500"
      icon={faArrowDown}
    />
  </li>
);

export default stepsCard;
