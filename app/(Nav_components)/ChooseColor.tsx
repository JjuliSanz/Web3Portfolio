"use client";
import React from "react";

interface Props {
  color: string;
  onColorChange: any;
  text_tittle: boolean;
}

function ChooseColor({ color, onColorChange, text_tittle }: Props) {
  return (
    <div className="w-full h-auto hover:bg-[#221d41]  select-none rounded-[8px] flex flex-row py-[13px] px-[15px] gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-star text-sky-500 "
        viewBox="0 0 16 16"
      >
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
      </svg>
      <div className="font-bold text-gray-200 text-[16px] flex flex-col items-center justify-start">
        <div
          className={` ${
            text_tittle ? "" : "hidden"
          } w-full flex flex-row items-center justify-start`}
        >
          <span>Stars colors:</span>
        </div>
        <div className="w-full flex flex-row items-center justify-start mt-[10px]">
          <div
            onClick={(e: any) => onColorChange("#0369A1")}
            className={`w-[23px] h-[23px] ${
              color === "#0369A1" ? "border-[2px] border-white" : ""
            } rounded bg-[#0369A1] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#4d7c0f")}
            className={`w-[23px] h-[23px] ${
              color === "#4d7c0f" ? "border-[2px] border-white" : ""
            } rounded bg-[#4d7c0f] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#c2410c")}
            className={`w-[23px] h-[23px]    ${
              color === "#c2410c" ? "border-[2px] border-white" : ""
            } rounded bg-[#c2410c] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#7e22ce")}
            className={`w-[23px] h-[23px]    ${
              color === "#7e22ce" ? "border-[2px] border-white" : ""
            } rounded bg-[#7e22ce] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#a16207")}
            className={`w-[23px] h-[23px]    ${
              color === "#a16207" ? "border-[2px] border-white" : ""
            } rounded bg-[#a16207] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#fff")}
            className={`w-[23px] h-[23px]    ${
              color === "#0f766e" ? " border-[2px] border-white" : ""
            } rounded bg-[#fff] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#be123c")}
            className={`w-[23px] h-[23px]    ${
              color === "#be123c" ? " border-[2px] border-white" : ""
            } rounded bg-[#be123c] ml-[10px] cursor-pointer`}
          ></div>
          <div
            onClick={(e: any) => onColorChange("#4338ca")}
            className={`w-[23px] h-[23px]    ${
              color === "#4338ca" ? " border-[2px] border-white" : ""
            } rounded bg-[#4338ca] ml-[10px] cursor-pointer`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ChooseColor;
