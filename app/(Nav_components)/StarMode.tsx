"use client";
import {
  StarColor_data,
  StarMode_data,
  setStarColor,
  setStarMode,
} from "@/Redux-store/Redux-action";
import { useDispatch, useSelector } from "react-redux";

function StarMode() {
  // Get star mode from Redux store.
  const starMode = useSelector(StarMode_data); 
  // Get dispatch function to trigger Redux actions.
  const dispatch = useDispatch(); 

  const StarModeStatus = () => {
    // Get the star mode status from local storage.
    const status = localStorage.getItem("starMode");

    if (status === "active") {
      // If star mode is active, dispatch an action to disable it in Redux store.
      dispatch(setStarMode("disable")); 
      // Update the star mode status in local storage.
      localStorage.setItem("starMode", "disable"); 
    } else {
      // If star mode is disabled, dispatch an action to enable it in Redux store.
      dispatch(setStarMode("active")); 
      // Update the star mode status in local storage.
      localStorage.setItem("starMode", "active"); 
    }
  };

  return (
    <div
      className="flex flex-row gap-4 w-full h-auto hover:bg-[#221d41] active:scale-95 transition-all duration-100 select-none rounded-[8px] py-[13px] px-[15px]"
      onClick={() => StarModeStatus()}
    >
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
      <div className="w-full h-auto flex flex-col Nav_text">
        <div className=" font-bold text-gray-200 text-[16px] flex flex-col items-start  justify-start  ">
          <div>
            <span>Stars Mode : </span>
          </div>
          <div className=" mt-[10px]">
            {starMode === "active" ? (
              <div className=" text-teal-500  text-[14px] "> Active </div>
            ) : (
              <div className=" text-rose-500  text-[14px] "> Disable </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StarMode;
