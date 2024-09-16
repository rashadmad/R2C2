import React from "react";
import copy from "../../data/copyData";

const AboutWhere: React.FC = () => {
  return (
    <section className="bg-white flex items-stretch min-h-screen">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="p-4">
            <h2 className="text-4xl my-4 roboto-bold width-100 font-bold tracking-tight text-sky-500">
              Roseland Is On The Move
            </h2>
            <p className="lato-regular text-gray-600 text-lg border-t-4 p-2 border-sky-500">
              We primarily service the most vulnerable people of Roseland.
              Roseleand is located in the south of Chicago. Once upon a time
              Roseland was a bastion for many industries and suburban family
              life. As of right now Rosland is on the move, go to{" "}
              <a
                className="text-sky-400"
                href="https://www.chicago.gov/city/en/sites/invest_sw/home/greater-roseland.html"
              >
                chicago.gov
              </a>{" "}
              to learn more about the many investments and developments in the
              town.
            </p>
            <blockquote className="p-4 my-4 bg-sky-100 border-l-4 border-sky-300 dark:border-gray-500 dark:bg-sky-200">
              <p className="text-xl mp5 italic font-medium leading-relaxed text-gray-900">
                <b className="text-size-xl">"</b>I was born and raised in
                Roseland. Some of my family and closest friends were born in
                Roseland. People I love have died in Roseland. I want to help
                the next generation learn not just to survive, but to live and
                thrive right here in Roseland."
              </p>
              <br></br>
              <p className="text-right">- Steve Gates Executive Director</p>
            </blockquote>
            <p>
              Roseland has a reputation for many things but violence is
              unfortunately one of them. You can see the numbers here at{" "}
              <a
                className="text-sky-400"
                href="https://www.chicago.gov/city/en/sites/vrd/home.html"
              >
                Chicago.gov
              </a>
              . R2C2 has tried and true practices to tackle this issue.
            </p>
          </div>
          <div className="w-full">
            <img
              className="flex items-center justify-center"
              src="https://rashad-madison-images.s3.us-east-2.amazonaws.com/R2C2/Screenshot+2024-06-06+at+1.50.51+PM.png"
              alt="roseland map"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full rounded-lg"
              src="https://cdn.choosechicago.com/uploads/2024/02/IMG_8599-1-scaled-e1706905915713-1800x740.jpg"
              alt="Community Support"
            />
          </div>
          <div>
            <h2 className="text-4xl my-4 roboto-bold width-100 font-bold tracking-tight text-sky-500">
              Opportunities and vision for the future
            </h2>
            <p className="lato-regular text-gray-600 text-lg border-t-4 p-2 border-sky-500">
              R2C2 has a vision for the future of Roseland by focusing on
              redirecting the energy in the community to something positive.
              Serving 200 families with wrap around supports for their journeys;
              once you begin with R2C2, you never really leave but become a part
              of the family. We look to become a longtime staple of The Roslenad
              community. The many participants of our programs to do great
              things in the world with our help. As a result of R2C2's
              high-touch, high-quality care, the young people and families R2C2
              works with are safer, healthier, more seen and better positioned to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutWhere;
