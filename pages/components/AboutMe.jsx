import React from "react";
import Image from "next/image";
import aboutImgTemp from "../../public/assets/aboutImgTemp.jpg";
const AboutMe = () => {
  return (
    <div id="about" className="w-full text-center lg:h-screen pt-24 pb-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5">
        <h1 className="text-5xl tracking-widest uppercase my-4">From civil/structrual engineering to full stack engineering </h1>
        <div className="mt-10 grid md:grid-cols-4 justify-between gap-10 md:flex mx-5 md:mx-auto">
          {/* left side */}
          <div>
            <div className=" col-span-3 w-full h-full shadow-xl shadow-gray-400 bg-black rounded-xl p-4">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                   
                    src={aboutImgTemp}
                    alt="aboutImgTemp"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col justify-center">

            <p className="py-5 text-xl indent-10">
              Hi! My name is David Vaughan. I am a fomer Civil/Structural
              Engineer persuing a career as a Full Stack Engineer. I am a firm
              believer that one should always work at improving yourself. One
              such way is to keep learning new things. On this site you will
              find projects of mine that I have created in my pursuit of
              learning cutting-edge techniques in the programming world as well
              as projects for clients.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
