"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(Footer)/Footer";
import emailjs from "emailjs-com";
import DroidViewer from "../(Ship)/3dShip";

function AboutMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Configure EmailJS service and template IDs
    const serviceId = "service_71p8ggb";
    const templateId = "service_71p8ggb";
    const userId = "hI4UPK2oZSMPy1xWH";

    // Send the form data using EmailJS
    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Clear the form or display a success message based on your needs
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
        setSuccessMessage("The message was sent successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setLoading(false);
        setErrorMessage("An error occurred while sending the message.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      });

    setLoading(true);
  };

  // Handle form input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px]">
      <div className="w-full 1250:w-[1210px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-[5px]" />
          <span className="text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full 1250:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hello, I&apos;m Julian Sanz
        </div>
        {/* Personal introduction */}
        <div className="text-gray-300 animate-slideright">
          Passionate about the potential of Web3 technologies to revolutionize
          various industries, I am eager to collaborate with talented teams and
          contribute to the growth of decentralized applications and the broader
          Web3 ecosystem. As a quick learner and a team player, I am committed
          to continuous improvement and embracing new challenges in the rapidly
          evolving world of blockchain and Web3 development.
        </div>
        {/* Learning experience */}
        <div>
          <div className="text-[20px] my-[15px] animate-slideright ">
            <span className="">I have learned through courses such as </span>
            <span className="text-sky-400"> Argentina Program</span> or,
            <span className="text-purple-600">
              {" "}
              Web Development Full-Stack
            </span>{" "}
            from
            <span className="text-orange-300"> CoderHouse </span>
            <span className="">and on my own from </span>
            <span className="text-emerald-400">videos or documentation</span>
          </div>
        </div>

        {/* Development Experience */}
        <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade ">
          Development Experience ⏳
        </div>
        <div className="mt-4  animate-slideright leading-[30px] monospace text-[16px] 800:text-[20px]">
          I&apos;m a junior web developer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, using
          frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>, and
          <span className="text-[#433a74] "> Next js</span>. I&apos;m a quick
          learner and I'm eager to work closely with clients to create
          efficient, scalable, and user-friendly solutions that solve real-world
          problems. Let&apos;s work together to bring your ideas to life!
        </div>

        {/* Contact form */}
        <div
          id="contact"
          className="font-bold text-[24px] mb-[15px] mt-[35px] text-center text-slate-200 animate-slowfade"
        >
          Contact Me
        </div>
        <div className=" flex items-center justify-center">
          <div className="bg-transparent rounded-lg shadow-lg">
            {/* Display success and error messages */}
            {successMessage && (
              <div className="bg-green-200 text-green-800 py-2 px-4 rounded mb-4">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="bg-red-200 text-red-800 py-2 px-4 rounded mb-4">
                {errorMessage}
              </div>
            )}
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-500 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-[#030014] border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-[#030014] border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-[#030014] border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>

          {/* <DroidViewer /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutMe;
