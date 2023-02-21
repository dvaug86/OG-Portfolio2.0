import Image from "next/image";
import React from "react";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div id="contact" className="bg-[#D4D8DA] w-full h-full pt-24 pb-16 ">
        <div className="max-w-[1240px] mx-auto  flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-black">
            contact
          </p>
          <h2 className="py-4">Get In Touch</h2>

          <div className="grid lg:grid-cols-5  gap-8">
            {/* left */}

            <div className=" col-span-3 lg:col-span-2 h-full bg-[#ecf0f3] shadow-xl shadow-gray-400 border-4 border-blue-500 rounded-xl p-4 ">
              <div>
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
                    <p className="text-xl">Full-Stack Developer</p>
                    <p className="my-15">
                      I am available for full-time positions or{" "}
                    </p>
                    <p>freelance work.</p>
                  </div>
                </div>
                <div className="md:mt-36">
                  <p className="uppercase text-center pt-8">Connect with me</p>
                  <div className="flex items-center justify-center gap-4 py-4">
                    <Link
                      href="https://www.linkedin.com/in/david-vaughan-97492774/"
                      target="_blank"
                    >
                      <div className="rounded-full  bg-blue-500 text-white shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedin />
                      </div>
                    </Link>
                    <Link href="https://github.com/dvaug86" target="_blank">
                      <div className="rounded-full   bg-blue-500 text-white shadow-xl shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>
                    {/* //////////////////////////////////////////////////
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
                  </a> //////////////////////////////////////////////////////////////  */}
                  </div>
                </div>
                <p className="text-center">Resume upon request</p>
              </div>
            </div>

            {/* right */}

            <div className="col-span-3  h-auto  shadow-xl shadow-gray-400 bg-[#ecf0f3] border-4 border-blue-500 rounded-xl lg:p-4">
              <div className="p-4">
                <form
                  target="_blank"
                  onSubmit={onSubmit}
                  action="https://formsubmit.co/c84de36b3c46270817e653961d0b55ac"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2  gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 bg-[#D4D8DA] border-blue-500"
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
                      className="border-2 rounded-lg p-3 bg-[#D4D8DA] border-blue-500"
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
                      className="border-2 rounded-lg p-3 bg-[#D4D8DA] border-blue-500"
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
                      className="border-2 w-full  rounded-lg p-3 bg-[#D4D8DA] border-blue-500"
                      rows="10"
                      columns="50"
                      name="message"
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
                  <button className="w-full p-4 text-white mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-12">
            <Link href="/#about" scroll={false}>
              <div className="rounded-full bg-blue-500 shadow-xl shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-white" size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
