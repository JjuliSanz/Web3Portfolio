"use client";
import React from "react";
import {
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  Single_data: Project_data;
}

function Dependencies({ Single_data }: Props) {
  // Initialize a state variable to track whether copying is done
  const [haveCopied, setHaveCopied] = useState<boolean>(false);

  // Function to copy data to the clipboard and handle the copied state
  const Copy = (e: any) => {
    // Set the copied state to true
    setHaveCopied(true);
    // Write the provided data to the clipboard
    navigator.clipboard.writeText(e);
    // Set a timeout to reset the copied state after 5 seconds
    const myTimeout = setTimeout(myStopFunction, 5000);
    function myStopFunction() {
      setHaveCopied(false);
      clearTimeout(myTimeout);
    }
  };

  // Create an array of dependencies data to display and potentially copy
  const copydata = Single_data.package.map((data) => data);

  return (
    <div className="w-full h-auto mt-[15px]">
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        Dependencies
      </span>
      <div className=" my-[15px] w-[400px] h-auto relative group  py-[15px] px-[10px] border text-slate-200 rounded-[10px] bg-[#0c0728] border-[#401f788e] ">
        {/* Map through and display each dependency */}
        {Single_data?.package.map((data: string) => (
          <div
            key={data}
            className="w-2/4 h-auto hover:bg-gray-300/20 rounded px-[15px]"
          >
            {data}
          </div>
        ))}

        {/* Display copy feedback if data is copied */}
        {haveCopied ? (
          <div
            id="button-primary"
            onClick={() => setHaveCopied(false)}
            className="right-[10px] top-[10px] absolute hidden group-hover:flex flex-row items-center px-[15px] py-[5px]  cursor-pointer rounded-[5px]"
          >
            <CheckCircleIcon className="h-5 w-5 text-teal-400" />
            <span className="ml-[7px] text-teal-400 text-[14px] ">Copied!</span>
          </div>
        ) : (
          <div
            id="button-primary"
            onClick={() => Copy(Single_data.package)}
            className="right-[10px] top-[10px] absolute hidden group-hover:flex flex-row items-center px-[15px] py-[5px]  cursor-pointer rounded-[5px]"
          >
            <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" />
            <span className=" text-[14px] ml-[7px]">Copy</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dependencies;
