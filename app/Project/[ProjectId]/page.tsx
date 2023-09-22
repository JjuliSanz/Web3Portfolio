"use client";

import React, { useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Footer from "@/app/(Footer)/Footer";
import { Project } from "../../../utils/constants";
import Image from "next/image";
import Dependencies from "./Dependencies";
import { useDispatch, useSelector } from "react-redux";
import { Image_src_data, setStarColor, setStarMode, set_Image_src } from "@/Redux-store/Redux-action";
import ScaleImage from "@/app/(BodySection)/(ScaleImg)/ScaleImg";

type Props = {
  params: {
    ProjectId: string;
  };
};

function page({ params: { ProjectId } }: Props) {
  // Fetch data for a single project based on the provided ProjectId
  const Single_data: Project_data | any = Project?.filter(
    (data: Project_data) => data.project_id === ProjectId
  );
  // Initialize Redux-related variables
  const dispatch = useDispatch();
  const ImageSrc = useSelector(Image_src_data);

  useEffect(() => {
    // Run this effect on component mount.
    const haveStarMode = localStorage.getItem("starMode"); // Get starMode value from local storage.
    const color = localStorage.getItem("color"); // Get color value from local storage.

    if (
      haveStarMode === "" ||
      haveStarMode === null ||
      haveStarMode === undefined ||
      color === "" ||
      color === undefined ||
      color === null
    ) {
      // If no starMode or color data found in local storage, set default values.
      localStorage.setItem("starMode", "active"); // Set starMode to "active".
      localStorage.setItem("color", "#4d7c0f"); // Set color to "#4d7c0f".
    } else {
      // If starMode and color data found in local storage, update Redux store with these values.
      dispatch(setStarMode(haveStarMode)); // Dispatch action to set starMode in Redux store.
      dispatch(setStarColor(color)); // Dispatch action to set color in Redux store.
    }
  }, []);

  return (
    <>
      <div className="w-full h-screen m-auto pt-[62px] flex flex-col items-center justify-start">
        {/* Back button */}
        <div className=" w-full 1250:w-[1210px] min-h-[70px] flex flex-row items-center justify-start px-[10px] 600:px-[15px] 1250:px-0">
          <Link
            href={"/"}
            className="flex flex-row items-center static 1000:fixed  justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
          >
            <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
            <span className=" text-[14px]">Back</span>
          </Link>
        </div>

        <div className="w-full 800:w-[800px] h-auto flex flex-col items-start justify-start px-[10px] 600:px-[15px] 800::px-0 mb-4">
          {/* Title */}
          <div className="font-bold text-[25px] text-slate-200">
            {Single_data[0].title}
          </div>
          {/* Project Image */}
          <div className="rounded-[7px] w-full h-[400px] overflow-hidden mt-4 cursor-pointer">
            <Image
              src={Single_data[0].project_image}
              alt="Project Image"
              width={1920}
              height={1080}
              className="rounded w-full h-full object-cover object-top hover:opacity-70 transition-opacity ease-in-out"
              onClick={() =>
                dispatch(set_Image_src({ data: Single_data[0].project_image }))
              }
            />
          </div>
          {/* About */}
          <span className="my-[20px] font-bold text-slate-200 text-[23px]">
            Description
          </span>
          <p className="text-gray-300 text-[15px]">
            {Single_data[0].description}
          </p>

          {/* Tech & feature */}
          <span className="font-bold text-slate-200 text-[23px] mt-[15px]">
            Technology & Feature
          </span>
          <ul className="list-disc ml-[20px] mt-[10px] text-slate-200 ">
            {Single_data[0].technology_feature.map((data: string) => (
              <li key={data}>{data}</li>
            ))}
          </ul>

          {/* Dependencies */}
          <Dependencies Single_data={Single_data[0]} />

          {/* Links */}
          <span className=" my-[20px] font-bold text-slate-200 text-[23px] select-none ">
            Links
          </span>
          <div className=" w-auto h-auto flex flex-row items-center justify-start 600:justify-between  flex-wrap  ">
            <a
              href={Single_data[0].githhub_link}
              target="_blank"
              className="px-[20px] py-[5px] mr-[10px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row active:scale-90 transition-all duration-150 select-none items-center cursor-pointer hover:bg-[#f3f3f3] "
            >
              <Image
                src={"/github.svg"}
                className="w-[23px] h-auto"
                width={1920}
                height={1080}
                alt=""
              />
              <span className="text-black  font-bold text-[14px] ml-[6px] ">
                Github
              </span>
            </a>
            <a
              href={Single_data[0].frontend}
              target="_blank"
              className={` ${
                Single_data[0].frontend.length ? "" : " hidden"
              } px-[20px] py-[5px] mb-[10px] 600:mb-0 rounded-[6px] bg-white mr-[10px] flex flex-row items-center active:scale-90 
          transition-all duration-150 select-none cursor-pointer hover:bg-[#f3f3f3] `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-window text-black"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
              </svg>
              <span className="text-black  font-bold text-[14px] ml-[6px]">
                Frontend
              </span>
            </a>
            <a
              href={Single_data[0].backend}
              target="_blank"
              className={` ${
                Single_data[0].backend.length ? "" : " hidden"
              } px-[20px] py-[5px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row items-center active:scale-90 
          transition-all duration-150 select-none cursor-pointer hover:bg-[#f3f3f3] `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-database text-black"
                viewBox="0 0 16 16"
              >
                <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313ZM13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 5.698ZM14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13V4Zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A4.92 4.92 0 0 0 13 8.698Zm0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525Z" />
              </svg>
              <span className="text-black  font-bold text-[14px] ml-[6px]">
                Backend
              </span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <Footer />
        {ImageSrc.data ? <ScaleImage src_data={ImageSrc} /> : <div></div>}
      </div>
    </>
  );
}

export default page;
