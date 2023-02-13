import Image from "next/image";
import React from "react";

import HTML from '../../public/assets/skills/html.png'
import CSS from '../../public/assets/skills/css.png'
import JavaScript from '../../public/assets/skills/javascript.png';
import ReactImg from '../../public/assets/skills/react.png';
import TailWind from '../../public/assets/skills/tailwind.png';
import GitHub from '../../public/assets/skills/github2.png';
import NextJS from '../../public/assets/skills/nextjs.png';
import mongoLogo from '../../public/assets/skills/mongo.png'
import nodeLogo from '../../public/assets/skills/node.png'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-black">
          Skills
        </p>
        <h2 className="py-4">My Tool Box</h2>
        {/* container for skill badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col  gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="64px" height="64px" alt="/" />
              </div> 
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-3xl text-yellow-300">HTML</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={CSS} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">CSS</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={JavaScript} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">JavaScript</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">React</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={TailWind} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">TailWind</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={mongoLogo} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">MongoDB</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image  className="text-yellow-300 z-[50]" src={GitHub} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">GitHub</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={nodeLogo} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">NodeJS</h3>
              </div>
            </div>
          </div>

                    <div className="p-6 shadow-xl shadow-gray-400 bg-black border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">

                        <div className="flex flex-col  gap-4 justify-center items-center">

              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
                          <div className="flex flex-col  gap-4 justify-center items-center">

                <h3 className="text-3xl text-yellow-300">NextJS</h3>
              </div>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
