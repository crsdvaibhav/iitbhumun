export default function ActiveNavbar() {
  return (
    <div className="mt2">
      <nav className=" shadow-magenta-dark fixed w-full z-20 bg-yellow-light mt-4">
        <div className="w-full">
          <div className="flex items-center h-12 w-full ">
            <div className="flex items-center  mx-20 mt-6 justify-between w-full ">
              <div className="relative ">
                <img
                  src="/images/Group 65.svg"
                  className=" relative top-0 left-0 z-10 "
                ></img>
                <img
                  src="/images/Ellipse 1.svg"
                  className="absolute top-0 left-0 "
                ></img>
              </div>
              <div className="flex justify-center items-center flex-shrink-0 "></div>
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-4 ">
                  <div
                    smooth={true}
                    className="  m-2 py-[5px] px-2 rounded-md text-magenta-dark sm:text-xl "
                  >
                    Home
                  </div>
                  <div
                    smooth={true}
                    className="  m-2 py-[5px] px-2 rounded-md text-magenta-dark  sm:text-xl "
                  >
                    FAQ
                  </div>
                  <div
                    smooth={true}
                    className="  m-2 py-[5px] px-2 rounded-md text-magenta-dark  sm:text-xl "
                  >
                    Gallery
                  </div>
                  <div>
                    <button className="bg-yellow-dark  m-2 py-[5px] px-2 rounded-md text-magenta-dark sm:text-xl font-bold">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
