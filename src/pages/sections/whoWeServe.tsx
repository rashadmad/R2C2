import React from "react";
import MockData from "../../data/copyData";

const WhoWeServe: React.FC = () => {
    return (
        <section className="bg-white flex items-stretch min-h-screen">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex xl:flex-row flex-col">
                    {/* Text Section */}
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
                                    aria-label="Learn more about our mission"
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
                                    {[
                                        { href: "https://en.wikipedia.org/wiki/Poverty", label: "Poverty" },
                                        { href: "https://en.wikipedia.org/wiki/Disinvestment", label: "Disinvestment", ariaLabel: "Learn more about disinvestment" },
                                        { href: "https://en.wikipedia.org/wiki/Dehumanization", label: "Dehumanization" },
                                        { href: "https://en.wikipedia.org/wiki/Redlining", label: "Redlining" },
                                        { href: "https://en.wikipedia.org/wiki/Institutional_racism", label: "Systemic racism", ariaLabel: "Learn more about systemic racism" },
                                        { href: "https://www.unr.edu/nevada-today/news/2019/atp-trauma", label: "Unaddressed trauma", ariaLabel: "Learn more about unaddressed trauma" },
                                        { href: "https://www.cato.org/blog/americas-criminal-justice-system-rotten-core", label: "The Flaws of the Judicial system", ariaLabel: "Learn more about judicial system flaws" },
                                    ].map((item, index) => (
                                        <a key={index} href={item.href} aria-label={item.ariaLabel}>
                                            • {item.label}
                                        </a>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="flex">
                        <div className="flex-auto justify-center w-full max-h-[500px] xl:max-w-[700px] xl:mt-[6rem]">
                            <img
                                className="rounded-lg size-full transform scale-x-[-1]"
                                src={"https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3810.JPG"}
                                alt="Community support and engagement"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeServe;
