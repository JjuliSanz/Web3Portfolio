import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "./Technology_tag";
import { Project } from "../../utils/constants";
import ProjectCard from "./(ProjectCard)/ProjectCard";
import FigmaDesign from "./FigmaDesign";

function Projects() {
  return (
    <div id="projects" className="w-full 1300:w-[1250px] z-10 h-auto relative m-auto flex flex-col items-center justify-center overflow-hidden pb-[100px]">
      <div className="w-full h-auto my-[15px] flex justify-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  font-semibold text-[40px]">
          Projects
        </span>       
      </div>
      <div className="w-full h-auto flex flex-row items-center justify-center 1250:justify-evenly flex-wrap p-[10px] 840:p-0">
        {Project.slice(0, 7).map((data: Project_data, index: any) => (
          <ProjectCard
            key={data.title + data.project_image + index}
            index={index}
            data={data}
          />
        ))}

        {/* FIGMA DESIGNS */}
        {/* <div className="w-full h-auto flex flex-row justify-center mt-[30px] mb-[20px] px-[15px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500  font-semibold text-[40px] ">
            Figma Designs
          </span>         
        </div>
        <FigmaDesign />       */}

        
      </div>
    </div>
  );
}

export default Projects;
