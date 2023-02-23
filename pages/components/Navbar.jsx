import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-screen h-24 shadow-2xl shadow-black/70 z-[100] bg-black">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        {/* left side */}
        <h2 className="md:hidden uppercase text-white ml-5"> dv</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="hidden md:flex uppercase text-white">david vaughan</h2>
        </motion.div>
        {/* right */}
        <div>
          <div className="flex items-center text-xl">
            <motion.div
              className="text-center md:text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ul className="items-center hidden md:flex ">
                <Link href="/#home" scroll={false}>
                  <li className="ml-5 text-white text-sm uppercase hover:border-b border-[#ecf0f3]">
                    home
                  </li>
                </Link>
                <Link href="/#about" scroll={false}>
                  <li className="ml-5 text-white text-sm uppercase hover:border-b border-[#ecf0f3]">
                    about
                  </li>
                </Link>
                <Link href="/#projects" scroll={false}>
                  <li className="ml-5 text-white text-sm uppercase hover:border-b border-[#ecf0f3]">
                    projects
                  </li>
                </Link>
                <Link href="/#skills" scroll={false}>
                  <li className="ml-5 text-white text-sm uppercase hover:border-b border-[#ecf0f3]">
                    skills
                  </li>
                </Link>
                
                <Link href="/#contact" scroll={false}>
                  <li className="ml-5 text-white text-sm uppercase hover:border-b border-[#ecf0f3]">
                    contact
                  </li>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/david-vaughan-97492774/"
                  target="_blank"
                >
                  <AiOutlineLinkedin className="text-white text-2xl my-1 ml-5 hover:border-b border-[#ecf0f3]" />
                </Link>
                <Link href="https://github.com/dvaug86" target="_blank">
                  <AiOutlineGithub className="text-white text-2xl my-1 ml-5 hover:border-b border-[#ecf0f3]" />
                </Link>
              </ul>
            </motion.div>
          </div>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu className=" text-white text-xl text-bold mr-5" />
          </div>
        </div>
      </div>

      {/* navbar cellphone menu */}
      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        <div
          className={
            nav
              ? " md:hidden fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full  justify-between">
            <h2 className=" uppercase   "> dv</h2>
            <div
              onClick={handleNav}
              className="rounded-full p-2 shadow-lg shadow-black  cursor-pointer"
            >
              <AiOutlineClose className="  text-xl text-bold " />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4"></div>

          <div className="py-4 flex flex-col">
            {/* navbar links for minimenu */}
            <ul className="uppercase">
              <Link href="/#home" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
             <Link href="/#projects" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              
              <Link href="/#contact" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            {/* side menu footer items */}
            <div className="pt-40 ">
              <p className="uppercase text-xl">Connections</p>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.linkedin.com/in/david-vaughan-97492774/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineLinkedin />
                  </div>
                </Link>
                <Link href="https://github.com/dvaug86" target="_blank">
                  <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineGithub />
                  </div>
                </Link>
                {/* <div className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFileAlt />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
