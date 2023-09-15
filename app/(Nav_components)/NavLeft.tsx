import Image from "next/image";
import Link from "next/link";

function NavLeft() {
  return (
    <Link href={"/"} className="w-auto h-auto flex flex-row items-center">
      <Image
        src={"/j.png"}
        width={40}
        height={40}
        alt="Logo"
        className="cursor-pointer hover:animate-slowspin"
      />
      <span
        id="cursive"
        className="font-bold text-gray-300 ml-[10px]  310:flex"
      >
        Julian Sanz
      </span>
    </Link>
  );
}

export default NavLeft;
