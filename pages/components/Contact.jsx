import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useForm } from "react-hook-form";
import Link from "next/link";
import contactImg from "../../public/assets/contactImg.png";
// import resume from "../../public/assets/dvResume.pdf";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest upercase text-black">contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5  gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 border-8 border-blue-500 rounded-xl p-4 ">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-102 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 uppercase">David Vaughan</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase text-center pt-8">Connect with me</p>
                <div className="flex items-center justify-center gap-4 py-4">
                  <Link
                    href="https://www.linkedin.com/in/david-vaughan-97492774/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg bg-blue-500 text-yellow-300 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </Link>
                  <Link href="https://github.com/dvaug86" target="_blank">
                    <div className="rounded-full shadow-lg  bg-blue-500 text-yellow-300 shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
{/* 
                  <a download
                    href="../../public/assets/dvResume.pdf"
                    target="_blank"
                    locale={false}
                    rel="noopener noreferrer"
                    alt="alt text"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]">
                      <FaFileAlt size={20} />
                    </div>
                  </a> */}
                </div>
                <p className="text-center">Resume upon request</p>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 border-8 border-blue-500 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/c84de36b3c46270817e653961d0b55ac"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-400"
                      type="text"
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p className="text-red mt-1">
                        {errors.name.type === "required" &&
                          "This field is required."}
                        {errors.name.type === "maxLength" &&
                          "Max length is 100 char."}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-400"
                    type="text"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="text-red mt-1">
                      {errors.email.type === "required" &&
                        "This field is required."}
                      {errors.email.type === "pattern" &&
                        "Invalid email address."}
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-400"
                    name="subject"
                    {...register("subject", {
                      required: true,
                      maxLength: 200,
                    })}
                  />
                  {errors.subject && (
                    <p className="text-red mt-1">
                      {errors.subject.type === "required" &&
                        "This field is required."}
                      {errors.subject.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-400"
                    rows="10"
                    name="message"
                    cols="50"
                    {...register("message", {
                      required: true,
                      maxLength: 2000,
                    })}
                  />
                  {errors.message && (
                    <p className="text-red mt-1">
                      {errors.message.type === "required" &&
                        "This field is required."}
                      {errors.message.type === "maxLength" &&
                        "Max length is 2000 char."}
                    </p>
                  )}
                </div>
                <button className="w-full p-4 text-yellow-300 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#about" scroll={false}>
            <div className="rounded-full bg-blue-500 shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-yellow-300" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
