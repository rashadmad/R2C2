import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => (
  <footer className="bg-sky-500">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
      <p className="text-center text-base text-white">Steven Gates - CEO & Founder</p>
      <nav className="flex flex-wrap justify-center -mx-5 -my-2">
        <div className="m-4">
          <FontAwesomeIcon className="fa-2x margin-5 text-white" icon={faInstagram} />
        </div>
        <div className="m-4">
          <FontAwesomeIcon className="fa-2x margin-5 text-white" icon={faLinkedinIn} />
        </div>
        <div className="m-4">
          <FontAwesomeIcon className="fa-2x margin-5 text-white" icon={faTiktok} />
        </div>
      </nav>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-base text-white">Re-imagining Roseland Community Collective. &copy;2024</p>
      </div>
    </div>
  </footer>
);

export default Footer;
