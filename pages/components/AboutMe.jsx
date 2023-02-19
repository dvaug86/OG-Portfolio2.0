import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import aboutImgTemp from "../../public/assets/aboutImgTemp.jpg";
const AboutMe = () => {
  return (
    <div id="about" className="w-full h-full pt-24 pb-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center items-center h-full my-5">
        <motion.div
          className="text-center md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -500 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-5xl tracking-widest uppercase text-center w-full object-contain mx-auto">
            From civil / structrual engineering{" "}
          </h1>
        </motion.div>
        <motion.div
          className="text-center md:text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: 500 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="text-5xl tracking-widest uppercase text-center w-full object-contain mx-auto">
            {" "}
            to full stack engineering{" "}
          </h1>
        </motion.div>
        <div className="mt-10 grid md:grid-cols-4  justify-between gap-32 md:flex mx-5 md:mx-auto">
          {/* left side */}
          <div>
            <motion.div
              className="text-center md:text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -200, y: -200 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
            >
                <div className="lg:p-2 h-full">
                  <div>
                    <Image
                      className="rounded-xl hover:scale-105 ease-in col-span-3 border-4 border-blue-500 shadow-gray-400  duration-300"
                      src={aboutImgTemp}
                      alt="aboutImgTemp"
                      priority
                      width={300}
                      height={300}
                    />
                  </div>
                
              </div>
            </motion.div>
          </div>
          {/* right side */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 200, y: 200 },
                visible: { opacity: 1, x: 0, y: 0 },
              }}
            >
              <p className="py-5 max-w-lg text-2xl text-left">
                Hi! My name is David Vaughan. I am a fomer Civil/Structural
                Engineer pursuing a career as a Full Stack Engineer. I am a firm
                believer that one should always work at improving yourself. I
                love learning new things especially from people who are more
                experienced so that I can adapt to better and more efficient
                methods. On this site you will find projects of mine that I have
                created in my pursuit of learning cutting-edge techniques in the
                programming world as well as projects for clients.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
