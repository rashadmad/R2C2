import React, { useState } from "react";
import Donate from "../../components/Donate";
import CopyData from "../../data/copyData";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navigation from "../../data/navigationDATA";
import { Dialog, DialogPanel } from "@headlessui/react";

interface NavigationItem {
  name: string;
  href: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: SocialLink[];
}

const team: TeamMember[] = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    socialLinks: [
      {
        platform: "Twitter",
        url: "#",
        icon: (props) => (
          <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.936 9.936 0 01-2.828.775A4.93 4.93 0 0023.337 3.1a9.876 9.876 0 01-3.127 1.195 4.914 4.914 0 00-8.385 4.482A13.933 13.933 0 011.671 3.15a4.822 4.822 0 00-.664 2.475 4.917 4.917 0 002.188 4.096 4.892 4.892 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.908 4.908 0 01-2.224.084 4.925 4.925 0 004.604 3.417 9.861 9.861 0 01-6.1 2.105c-.395 0-.785-.023-1.17-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.506 14.009-14.01 0-.213-.005-.426-.014-.637A9.936 9.936 0 0024 4.557z" />
          </svg>
        ),
      },
      {
        platform: "LinkedIn",
        url: "#",
        icon: (props) => (
          <svg {...props} fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 1.803c5.623 0 10.197 4.574 10.197 10.197 0 5.624-4.574 10.197-10.197 10.197-5.623 0-10.197-4.573-10.197-10.197 0-5.623 4.574-10.197 10.197-10.197zm-4.838 3.92c-.77 0-1.397.627-1.397 1.397 0 .771.627 1.397 1.397 1.397.771 0 1.397-.626 1.397-1.397 0-.77-.626-1.397-1.397-1.397zm9.676 1.826h-1.588v5.004c0 .487-.047.97-.279 1.347a1.507 1.507 0 01-1.33.742c-.945 0-1.646-.706-1.646-1.652v-5.442h-1.588v5.442c0 .945-.701 1.652-1.646 1.652-.682 0-1.247-.335-1.558-.887-.179-.312-.278-.665-.278-1.032v-5.175H6.162v5.175c0 1.375.775 2.467 1.918 2.95.293.124.607.193.926.193.487 0 .964-.094 1.408-.276a3.482 3.482 0 001.31-1.184 3.482 3.482 0 001.31 1.184c.444.182.92.276 1.408.276.32 0 .633-.068.927-.193a2.76 2.76 0 00.619-.343c.018-.015.036-.031.054-.047.132-.11.262-.225.388-.345a2.76 2.76 0 00.306-.315c.019-.022.036-.045.055-.067a3.482 3.482 0 001.31-1.184 3.482 3.482 0 001.31 1.184c.444.182.92.276 1.408.276.32 0 .633-.068.927-.193a2.76 2.76 0 00.619-.343c.018-.015.036-.031.054-.047.132-.11.262-.225.388-.345a2.76 2.76 0 00.306-.315c.019-.022.036-.045.055-.067a3.482 3.482 0 001.31-1.184c.444.182.92.276 1.408.276.32 0 .633-.068.927-.193a3.49 3.49 0 001.408-.276 3.49 3.49 0 001.31-1.184 3.49 3.49 0 001.31-1.184c.444.182.92.276 1.408.276.32 0 .633-.068.927-.193a3.49 3.49 0 001.31-1.184c.487-.376.827-.944.827-1.595v-5.442z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  },
  // More team members...
];

export default function NewsHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main>
      <div className="relative isolate">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        >
          <div
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="yellowtail-regular text-5xl text-white">
                  Whats happening
                </h1>
                <h2 className="text-4xl my-4 roboto-bold width-100 font-bold tracking-tight text-white">
                  Roseland Is On The Move
                </h2>
                <h2 className="roboto-bold mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Making a greater Roseland is a Journey. Join us, as we have
                  Artist, activists, educators and much more have speaking
                  events. We take our participants to new places and expose them
                  to the world outside of Roseland.
                </h2>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A4019.JPG"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A4339.JPG"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3711.JPG"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      alt=""
                      src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A4350.JPG"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      alt=""
                      src="https://stevegatesmedia.s3.us-east-2.amazonaws.com/_T4A3702+.JPG"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
