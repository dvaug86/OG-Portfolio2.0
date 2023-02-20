import React from "react";
import Image from "next/image";
import TitlePic from "../../public/assets/TitlePic.png";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img relative">
      <Image className="z-[-10] object-cover" src={TitlePic} alt="/" fill />
    </div>
  );
};

export default HomePage;
