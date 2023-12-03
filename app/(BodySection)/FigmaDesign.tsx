import Image from "next/image";

function FigmaDesign() {
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center 1250:flex-row p-0 1250:p-[10px] animate-slideup ">
        <div className="w-4/6 h-auto rounded-[18px] backdrop-blur-sm overflow-hidden border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] mr-0 1250:mr-[20px] mt-[20px] 1250:mt-0">
          <div className="w-full h-[400px] overflow-hidden">
            <Image
              src={"/Projects/Valorant.png"}
              width={1920}
              height={1080}
              alt="image"
              className="w-full h-full rounded-[15px] cursor-pointer object-cover object-top"
            />
          </div>
          <div className="w-full h-auto mt-[15px] flex flex-col 500:flex-row items-start 550:items-center justify-between ">
            <div className=" flex flex-row items-center ">
              <Image
                src={"/Tech/figma.png"}
                width={1920}
                height={1080}
                alt="image"
                className="w-[20px] h-auto cursor-pointer mr-[15px] "
              />
              <div className=" text-gray-200 font-bold text-[16px] 550:text-[18px] 720:text-[22px]">
                Valorant Agent Selection Page
              </div>
            </div>
            <a
              href="https://www.figma.com/file/OCt7G2CdaMmwPQQXYFdsox/Valorant?type=design&t=nDijRIn7lMOhVxIH-6"
              className=" font-bold text-gray-200 px-[15px] py-[8px] bg-blue-500 rounded-[10px] mt-[15px] 500:mt-0"
              target="_blank"
            >
              Open in Figma
            </a>
          </div>
        </div>
        {/* <div className="w-5/6 h-auto rounded-[18px] backdrop-blur-sm overflow-hidden border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] mt-[20px] 1250:mt-0">
          <div className="w-full h-[400px] overflow-hidden">
            <Image
              src={"/Projects/bookingapp.png"}
              width={1920}
              height={1080}
              alt="image"
              className="w-full h-full rounded-[15px] cursor-pointer object-cover object-top"
            />
          </div>
          <div className="w-full h-auto mt-[15px] flex flex-col 500:flex-row items-start 550:items-center justify-between">
            <div className=" flex flex-row items-center ">
              <Image
                src={"/Tech/figma.png"}
                width={1920}
                height={1080}
                alt="image"
                className="w-[20px] h-auto cursor-pointer mr-[15px] "
              />
              <div className=" text-gray-200 font-bold text-[16px] 550:text-[18px] 720:text-[22px]">
                Coffee Shop Figma Desing
              </div>
            </div>
            <a
              href="https://www.figma.com/community/file/1255873305901553415/Coffee-Shop"
              className=" font-bold text-gray-200 px-[15px] py-[8px] bg-blue-500 rounded-[10px] mt-[15px] 500:mt-0 "
            >
              Open in Figma
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default FigmaDesign;
