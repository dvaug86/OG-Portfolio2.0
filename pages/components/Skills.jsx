import Image from "next/image";
import React from "react";

import HTML from "../../public/assets/skills/html.png";
import CSS from "../../public/assets/skills/css.png";
import JavaScript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import TailWind from "../../public/assets/skills/tailwind.png";
import GitHub from "../../public/assets/skills/github2.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import mongoLogo from "../../public/assets/skills/mongo.png";
import nodeLogo from "../../public/assets/skills/node.png";
import bootstrap from "../../public/assets/skills/bootstrap.png";
import mysql from "../../public/assets/skills/mysql.png";
import { motion } from "framer-motion";
import { useState } from "react";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <div id="skills" className="w-full h-full pt-24 pb-16 ">
      <div className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-black">Skills</p>
        <h2 className="py-4">My Tool Box</h2>
        {/* container for skill badges */}
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <div className="  grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-2">
            <div className=" p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col m-auto gap-4 justify-center items-center">
                <Image src={HTML} alt="/" onLoad={() => setIsLoaded(true)} />
                <h3 className="text-3xl text-white">HTML</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image
                  src={JavaScript}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl text-white">JavaScript</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image
                  src={ReactImg}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl text-white">React</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-10 justify-between items-center">
                <Image src={NextJS} alt="/" onLoad={() => setIsLoaded(true)} />
                <h3 className="text-3xl mt-[3.07px] text-white">NextJS</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image
                  src={nodeLogo}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl text-white">NodeJS</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image src={CSS} alt="/" onLoad={() => setIsLoaded(true)} />
                <h3 className="text-3xl text-white">CSS</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-14 justify-center items-center">
                <Image
                  src={bootstrap}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl mt-[2.15px] text-white">Bootstrap</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image
                  src={TailWind}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl text-white">TailWind</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-12  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-20 justify-center items-center">
                <Image src={mysql} alt="/" onLoad={() => setIsLoaded(true)} />
                <h3 className="text-3xl text-white mt-[7.35px]">MySQL</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image
                  src={mongoLogo}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl text-white">MongoDB</h3>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-400 bg-gray-700 border-4  border-blue-500 rounded-xl hover:scale-105 ease-in duration-300">
              <div className="flex flex-col  gap-4 justify-center items-center">
                <Image
                  className="text-white z-[50]"
                  src={GitHub}
                  alt="/"
                  onLoad={() => setIsLoaded(true)}
                />
                <h3 className="text-3xl text-white">GitHub</h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
