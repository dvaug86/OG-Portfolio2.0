import Image from "next/image";
import React from "react";
 import gymApp from '../public/assets/projectImgs/gymApp.png'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from "next/link";

const gym = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <div className={"image-container"}>
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={gymApp}
            alt="/"
          />
        </div>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Drew's Plant Nursery</h2>
          <h3>NextJS / TypeScript / Tailwind / Vite /Framer-Motion </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2>Overview</h2>
          <p>
            This app was created by following along a tutorial. It was a great learning experience. This was my first introduction to Tailwind Framer-Motion Vite, and React-Form. It has foundational to my construction of other websites
          </p>
          <button className="px-8 py-2 mt-4 mr-8" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://gym-app-virid.vercel.app/'
                            }} >Website</button>
                            <button className="px-8 py-2 mt-4 mr-8" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://github.com/dvaug86/gymApp'
                            }} >Git Repo</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-black rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vite
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Framer-Motion
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default gym;
