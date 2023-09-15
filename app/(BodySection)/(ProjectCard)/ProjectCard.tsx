"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Technology_tag from "../Technology_tag";

interface Props {
  data: Project_data;
  index: number;
}

function ProjectCard({ data, index }: Props) {
  return (
    <div className="w-5/6 840:w-2/4 1000:w-[40%] 1250:w-[390px] h-[590px] 1250:h-[500px] rounded-[14px] relative overflow-hidden backdrop-blur-sm m-[10px] border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] mb-[20px] cursor-pointer">
      <div className="rounded-[7px] w-full h-2/4">
        <Image
          src={data?.project_image}
          width={1920}
          height={1080}
          alt="image"
          className="rounded w-full h-full object-cover object-top"
        />
      </div>
      <Link href={`/Project/${index}`}>
        <div className="w-full h-auto mt-4 text-white flex felx-row items-center justify-between">
          <span className="font-bold text-[18px] ">{data.title}</span>
        </div>

        <div className="w-full h-auto">
          <span className="text-[14px] text-gray-400">
            {data.description.slice(0, 143)}...
          </span>
        </div>
        <Technology_tag data={data} />
      </Link>
    </div>
  );
}

export default ProjectCard;
