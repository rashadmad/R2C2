import React from "react";

interface DonateProps {
    colorStyleStandard: boolean;
}

const Donate: React.FC<DonateProps> = ({ colorStyleStandard = true }) => {
    const standardStyles = "p-10 border-white hover:border-white border-2 rounded-md hover:text-white bg-white px-3.5 py-2.5 text-xl font-semibold text-sky-500 shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";
    const alternativeStyles = "p-10 border-sky-500 hover:border-white border-2 rounded-md hover:text-white bg-sky-500 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
    
    const color = colorStyleStandard ? standardStyles : alternativeStyles;

    return (
        <a target="_blank" href="https://donate.stripe.com/6oEbJM1Gu62S73W8wx" className={color}>
            Donate
        </a>
    );
};

export default Donate;
