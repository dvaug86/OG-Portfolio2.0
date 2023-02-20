import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex flex-items-center justify-center h-[350px] w-auto   shadow-xl shadow-gray-400 rounded-xl  group  hover:bg-black/90 text-white">
      <Image
      
        className="rounded-xl group-hover:opacity-10 border-4 border-blue-500"
        src={backgroundImg}
        alt="/"
      /> 
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-white tracking-wider text-center mb-2">
          {title}
        </h3>
        <Link  href={projectUrl ?? '' }>
          <p className="text-center py-3 rounded-lg bg-blue-500 text-white font-bold text-lg">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
