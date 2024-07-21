import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { CiGlobe, CiStar } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { MdOutlineToggleOff } from "react-icons/md";

export default function Home() {
  return (
    <>
      <header>
        <nav className=" grid grid-cols-3 px-16 text-sm font-bold items-center border-b-[1px] h-20 fixed top-0 bg-white w-screen">
          <div>
            <img src="assets\airbnb-logo.png" alt="" className="h-16 w-28" />
          </div>

          <div className="flex justify-evenly items-center border rounded-full shadow-md h-12 w-95">
            <button className="border-r-2 px-4">Any Where</button>
            <button className="border-r-2 px-4">Any week</button>
            <button className="text-gray-500 px-4">Any Time</button>
            <div className="bg-red-500 text-xl rounded-full text-white p-2">
              <IoSearchSharp />
            </div>
          </div>

          <div className="flex justify-end items-center gap-8">
            <button>Airbnb Your Home</button>
            <CiGlobe className="text-xl" />

            <div className="flex items-center gap-2 shadow-md rounded-full p-2  pl-5">
              <GiHamburgerMenu className="text-xl" />
              <button className="bg-black text-white rounded-full text-[10px] text-center h-7 w-7 ">
                E
              </button>
            </div>
          </div>
        </nav>

        {/* Category bar */}
        <div className="flex items-center h-24 space-x-5 fixed bg-white top-20 ">
          <div className="flex justify-center items-center space-x-12">
            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2 pl-16">
              <img src="/assets/type1.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Amazing Pool</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type2.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Farms</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type3.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Amazing views</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type4.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Cabins</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type5.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Golfing</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type6.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Lakefront</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type7.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Rooms</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type8.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Beachfront</p>
            </div>
            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type9.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">OMG!</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type10.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Countryside</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type11.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Tropical</p>
            </div>

            <div className="flex flex-col text-gray-400 hover:text-black items-center gap-2">
              <img src="/assets/type12.jpeg" alt="" className="h-6 w-6" />
              <p className="text-xs">Tiny homes</p>
            </div>

            <div className="text-2xl">
              <TfiArrowCircleRight className="" />
            </div>

            <button className="flex gap-2 justify-around items-center border shadow-md p-4 rounded-xl">
              <HiAdjustmentsHorizontal />
              <p className="text-xs">Filters</p>
            </button>
          </div>
        </div>


        {/* Price bar */}

        <div className="flex justify-center items-center p-1 mt-44">
          <div className="flex justify-between items-center border shadow-md p-4 rounded-xl w-[600px] h-16">
            <div className="flex justify-start">
              <p className="border-r-2 border-gray-200 font-medium text-base pr-4">
                Display total price
              </p>
              <p className="text-sm text-gray-400 pl-4">
                Includes all fees, before taxes
              </p>
            </div>

            <div className="text-4xl">
              <MdOutlineToggleOff />
            </div>
          </div>
        </div>
      </header>

      <main className=" mt-14 mx-10">
        <div className="grid grid-cols-4">
          <div className="h-96 w-72">
            <img
              src="/assets/img1.jpg"
              alt=""
              className="w-72 h-64 rounded-xl"
            />
            <div className="flex justify-between mt-2">
              <p className="text-sm font-medium">Mira Bhayandra, India</p>
              <div className="flex items-center">
                <CiStar />
                <p>4.97</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">36 kilometer away</p>
            <p className="text-gray-400 text-sm">2-7 aug</p>
            <p className="text-sm font-semibold">$22,241 night</p>
          </div>

          <div className="h-96 w-72">
            <img
              src="/assets/img2.jpg"
              alt=""
              className="w-72 h-64 rounded-xl"
            />
            <div className="flex justify-between mt-2">
              <p className="text-sm font-medium">Mira Bhayandra, India</p>
              <div className="flex items-center">
                <CiStar />
                <p>4.97</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">36 kilometer away</p>
            <p className="text-gray-400 text-sm">2-7 aug</p>
            <p className="text-sm font-semibold">$22,241 night</p>
          </div>

          <div className="h-96 w-72">
            <img
              src="/assets/img3.jpg"
              alt=""
              className="rounded-xl h-64 w-96"
            />
            <div className="flex justify-between mt-2">
              <p>Lonavia, Pakistan</p>
              <div className="flex items-center">
                <CiStar />
                <p>5.00</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">1200 kilometer away</p>
            <p className="text-sm text-gray-400">9-12 aug</p>
            <p className="text-sm font-semibold">$22,241</p>
          </div>

          <div className="h-96 w-72">
            <img
              src="/assets/img4.jpg"
              alt=""
              className="rounded-xl h-64 w-96"
            />
            <div className="flex justify-between mt-2">
              <p>Lonavia, Pakistan</p>
              <div className="flex items-center">
                <CiStar />
                <p>5.00</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">1200 kilometer away</p>
            <p className="text-sm text-gray-400">9-12 aug</p>
            <p className="text-sm font-semibold">$22,241</p>
          </div>


          <div className="h-96 w-72">
            <img
              src="/assets/img1.jpg"
              alt=""
              className="w-72 h-64 rounded-xl"
            />
            <div className="flex justify-between mt-2">
              <p className="text-sm font-medium">Mira Bhayandra, India</p>
              <div className="flex items-center">
                <CiStar />
                <p>4.97</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">36 kilometer away</p>
            <p className="text-gray-400 text-sm">2-7 aug</p>
            <p className="text-sm font-semibold">$22,241 night</p>
          </div>

          <div className="h-96 w-72">
            <img
              src="/assets/img2.jpg"
              alt=""
              className="w-72 h-64 rounded-xl"
            />
            <div className="flex justify-between mt-2">
              <p className="text-sm font-medium">Mira Bhayandra, India</p>
              <div className="flex items-center">
                <CiStar />
                <p>4.97</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">36 kilometer away</p>
            <p className="text-gray-400 text-sm">2-7 aug</p>
            <p className="text-sm font-semibold">$22,241 night</p>
          </div>

          <div className="h-96 w-72">
            <img
              src="/assets/img3.jpg"
              alt=""
              className="rounded-xl h-64 w-96"
            />
            <div className="flex justify-between mt-2">
              <p>Lonavia, Pakistan</p>
              <div className="flex items-center">
                <CiStar />
                <p>5.00</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">1200 kilometer away</p>
            <p className="text-sm text-gray-400">9-12 aug</p>
            <p className="text-sm font-semibold">$22,241</p>
          </div>

          <div className="h-96 w-72">
            <img
              src="/assets/img4.jpg"
              alt=""
              className="rounded-xl h-64 w-96"
            />
            <div className="flex justify-between mt-2">
              <p>Lonavia, Pakistan</p>
              <div className="flex items-center">
                <CiStar />
                <p>5.00</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">1200 kilometer away</p>
            <p className="text-sm text-gray-400">9-12 aug</p>
            <p className="text-sm font-semibold">$22,241</p>
          </div>


        </div>

        
      </main>

      <footer>
        <div className="flex justify-between items-center p-2 fixed bottom-0 w-full px-10 bg-white">
          <div className="flex text-sm font-medium gap-2 text-gray-500">
          <p>&copy; 2023 Airbnb, inc</p>
          <p>.</p>
          <p>Privacy</p>
          <p>.</p>
          <p>Terms</p>
          <p>.</p>
          <p>Sitemap</p>
          <p>.</p>
          <p>Company details</p>
          </div>

          <div className="flex gap-2 text-sm font-medium text-gray-600">
          <CiGlobe className="text-xl" />
          <p>English(IN)</p>
          <p>$ PKR</p>
          <p>Support & resource</p>
          </div>

        </div>
      </footer>
    </>
  );
}
