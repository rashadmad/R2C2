import React from "react"
import communityPic from "https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3810.JPG";
import MockData from "../../data/copyData";

const WhoWeServe: React.FC = () => {

    return (
    <section className="bg-white flex items-stretch min-h-screen">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex xl:flex-row flex-col">
                <div className="flex-auto xl:w-1/2 m-3 p-5 lg:w-full">
                    <h2 className="text-4xl roboto-bold width-100 font-bold tracking-tight text-sky-500">
                        {MockData.Home.secondHeader}
                    </h2>
                    <p className="mt-4 lato-regular text-gray-600 text-lg border-t-4 p-2 border-sky-500">
                        {MockData.Home.missionDescription}
                    </p>
                    <div className="mt-4">
                        <div className="mt-7">
                            <a
                                href="#"
                                className="text-sky-500 p-3 hover:text-slate-300 text-2xl"
                            >
                                Learn more
                                <span>&#8594;</span>
                            </a>
                        </div>
                        <fieldset className="mt-5 border border-b-8 border-r-4 border-solid border-sky-500 p-3">
                            <legend className="md:text-2xl roboto-bold width-100 font-bold tracking-tight text-sky-500 p-2">
                                We Are Tackling
                            </legend>
                            <div className="roboto-regular flex flex-col gap-2 text-2xl text-sky-500 p-2">
                                <a href="https://en.wikipedia.org/wiki/Poverty">• Poverty</a>
                                <a href="#">• Disinvestment</a>
                                <a href="https://en.wikipedia.org/wiki/Dehumanization">
                                    • Dehumanization
                                </a>
                                <a href="https://en.wikipedia.org/wiki/Redlining">• Redlining</a>
                                <a href="Institutional racism">• Systemic racism</a>
                                <a href="#">• Unaddressed trauma</a>
                                <a href="#">• The Flaws of the Judicial system</a>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-auto justify-center w-full max-h-[500px] xl:max-w-[700px] xl:mt-[6rem]">
                        <img
                            className="rounded-lg size-full transform scale-x-[-1]"
                            src={"https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3810.JPG"}
                            alt="Community Support" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};
export default WhoWeServe
