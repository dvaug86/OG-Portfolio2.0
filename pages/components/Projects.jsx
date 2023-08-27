import Image from "next/image";
import Link from "next/link";
import React from "react";
import DrewsPlant from "../../public/assets/projectImgs/drewsPlant.png";
import GymApp from "../../public/assets/projectImgs/gymApp.png";
import ReactTetris from "../../public/assets/projectImgs/reactTetris.png";
import JimsConstruct from "../../public/assets/projectImgs/jimsConstruct.png";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="bg-[#D4D8DA] w-full h-full pt-24 pb-16 ">
      <div className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full">
        <p className="text-xl px-2 tracking-widest uppercase text-black ">
          Projects
        </p>
        <h2 className="py-4 px-2">What I've Built</h2>
        <div className="grid md:grid-cols-2 px-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ProjectItem
              title="Jim's Construction"
              backgroundImg={JimsConstruct}
              projectUrl="/jims"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ProjectItem
              title="Drew's Plant Nursery"
              backgroundImg={DrewsPlant}
              projectUrl="/drews"
            />
          </motion.div>
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ProjectItem
              title="Gym App"
              backgroundImg={GymApp}
              projectUrl="/gym"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.8, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ProjectItem
              title="Tetris with React"
              backgroundImg={ReactTetris}
              projectUrl="/gym"
            />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
