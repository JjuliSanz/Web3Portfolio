"use client";
import { useDispatch, useSelector } from "react-redux";
import ChooseColor from "./ChooseColor";
import StarMode from "./StarMode";
import {
  MobileMenu_data,
  StarColor_data,
  setMobileMenu,
  setStarColor,
} from "@/Redux-store/Redux-action";
import { useEffect, useRef, useState } from "react";

function NavRight() {
  const color = useSelector(StarColor_data); // Get star color from Redux store.
  const dispatch = useDispatch(); // Get dispatch function to trigger Redux actions.
  const [open, setOpen] = useState<boolean>(false); // Define state for toggling a menu.
  const ref = useRef<HTMLDivElement>(null); // Create a reference to a DOM element.
  const mobileMenu = useSelector(MobileMenu_data); // Get mobile menu state from Redux store.

  // Handle color change event.
  const onColorChange = (e: string) => {
    // Dispatch an action to update the star color in Redux store.
    dispatch(setStarColor(e));
    // Store the color choice in local storage.
    localStorage.setItem("color", e);
  };

  // Handle click event to toggle the menu.
  const handleClick = (e: any) => {
    setOpen(!open);
  };

  const handleClickOutside = (e: any) => {
    // Handle click outside event to close the menu.
    if (open && ref.current && !ref.current.contains(e.target)) {
      // Close the menu if it's open and a click occurs outside of it.
      setOpen(false);
    }
  };

  // Add an event listener when the component is mounted.
  useEffect(() => {
    // Listen for mousedown events outside of the menu.
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Remove the event listener when the component is unmounted.
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      {mobileMenu ? (
        <div></div>
      ) : (
        <>
          <div
            onClick={() => dispatch(setMobileMenu(true))}
            className="mr-[8px] 310:mr-[20px] cursor-pointer flex 860:hidden animate-slowfade "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[30px] w-[30px] text-gray-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div onClick={handleClick} ref={ref} className="hidden 860:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star text-sky-500 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
            <div
              className={`w-[400px] h-auto rounded-[10px] bg-[#0c0728] p-[20px] absolute right-4 mt-[43px] ${
                open ? "flex flex-col" : "hidden"
              } flex flex-col items-center justify-center`}
            >
              <StarMode />

              <ChooseColor
                color={color}
                onColorChange={onColorChange}
                text_tittle={true}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NavRight;
