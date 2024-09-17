import React from "react";

export default function NewsHero() {
  return (
    <main className="relative isolate">
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      >
        <pattern
          x="50%"
          y={-1}
          id="news-hero-pattern"
          width={200}
          height={200}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
        <rect
          fill="url(#news-hero-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="yellowtail-regular text-5xl text-white">
              What's happening
            </h1>
            <h2 className="text-4xl my-4 roboto-bold font-bold tracking-tight text-white">
              Roseland Is On The Move
            </h2>
            <p className="roboto-bold mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Making a greater Roseland is a Journey. Join us, as we have
              artists, activists, educators, and much more for speaking events.
              We take our participants to new places and expose them to the
              world outside of Roseland.
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <img
                  alt="horseback riding two teens"
                  src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A4019.JPG"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <img
                  alt="African American Kid with orange hat"
                  src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A4339.JPG"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  alt="African American Kid creating a shirt"
                  src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3711.JPG"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
            <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <img
                  alt="R2C2 speaker"
                  src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A4350.JPG"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="relative">
                <img
                  alt="R2C2 Leader"
                  src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3702+.JPG"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
