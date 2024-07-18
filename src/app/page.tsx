import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  return (
    <>
    <header>
      <nav className="grid grid-cols-3 px-16 text-sm font-bold items-center border-b-[1px] w-screen h-20">
        <div>
          <img src="assets\airbnb-logo.png" alt="" className="h-16 w-28"/>
        </div>


        <div className="flex justify-evenly items-center border rounded-full shadow-md h-12 w-95">
          <button className="border-r-2 px-4">Any Where</button>
          <button className="border-r-2 px-4">Any week</button>
          <button className="text-gray-500 px-4">Any Time</button>
          <div className="bg-red-500 text-xl rounded-full text-white p-2">
          <IoSearchSharp/>
          </div>
        </div>


        <div className="flex justify-end items-center gap-8">
          <button>Airbnb Your Home</button>
          <CiGlobe className="text-xl"/>

          <div className="flex items-center gap-2 shadow-md rounded-full p-2  pl-5">
          <GiHamburgerMenu className="text-xl"/>
          <button className="bg-black text-white rounded-full text-[10px] text-center h-7 w-7 ">E</button>
          </div>

        </div>
      </nav>
    </header>

    <main></main>

    <footer></footer>
    </>
  );
}
