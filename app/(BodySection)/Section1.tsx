"use client";

import {
  Image_src_data,
  MobileMenu_data,
  setStarColor,
  setStarMode,
} from "@/Redux-store/Redux-action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section2 from "./Section2";
import MobileMenu from "./(MobileMenu)/MobileMenu";
import ScaleImage from "./(ScaleImg)/ScaleImg";

interface Props {
  data: string;
}

function Section1() {
  const dispatch = useDispatch();
  // Get mobileMenu state from Redux store.
  const mobileMenu: boolean = useSelector(MobileMenu_data);
  // Get ImageSrc state from Redux store.
  const ImageSrc: Props = useSelector(Image_src_data);

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
    <section className="w-full h-[940px] shadow-lg shadow-[#030014]/50 relative bg-[url('/main.svg')]bg-cover flex flex-col overflow-hidden items-center justify-start 1140:pl-[90px]">
      <div className="w-[1250px] h-full z-[-10] absolute top-[-280px] flex flex-row items-start justify-center">
        <video
          src="/blackhole.webm"
          preload="false"
          playsInline
          loop
          muted
          className="w-full h-auto rotate-180"
          // @ts-ignore
          autoPlay="autoplay"
        ></video>
      </div>
      <Section2 />
      {/* Render MobileMenu component conditionally based on mobileMenu state. */}
      {mobileMenu ? <MobileMenu /> : <div></div>}{" "}
      {/* Render ScaleImage component conditionally based on ImageSrc data. */}
      {ImageSrc.data ? <ScaleImage src_data={ImageSrc} /> : <div></div>}{" "}
    </section>
  );
}

export default Section1;
