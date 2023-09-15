import { useDispatch } from "react-redux";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { set_Image_src } from "@/Redux-store/Redux-action";

interface Props {
  src_data: {
    data: string;
  };
}
function ScaleImage({ src_data }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen bg-black/80 backdrop-blur-sm fixed z-[999] inset-0 flex flex-col items-center 720:flex-row 720:items-start justify-center overflow-auto">
      <div
        onClick={() => dispatch(set_Image_src(""))}
        className="absolute top-[20px] left-[20px]"
      >
        <div className="flex flex-row items-center justify-start text-slate-200 hover:text-sky-500 cursor-pointer">
          <ArrowLeftIcon className="h-6 w-6 mr-[5px]" />
          <span className="text-[17px]">Back</span>
        </div>
      </div>

      <div className="w-3/4 p-[7px] rounded-[15px] 720:mt-4">
        <img
          alt="Project image"
          src={src_data.data}
          className="w-full h-full rounded-[10px]"
        />
      </div>
    </div>
  );
}
export default ScaleImage;
