export default function navBar() {
  return (
    <div>
      <nav className="  fixed w-full z-20">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 "></div>
              <div className="hidden md:block">
                <div className="ml-10 flex space-x-4">
                  <div
                    smooth="true"
                    className="  m-2 py-[5px] px-2 rounded-md text-yellow-light sm:text-xl "
                  >
                    Home
                  </div>
                  <div
                    smooth="true"
                    className="  m-2 py-[5px] px-2 rounded-md text-yellow-light  sm:text-xl "
                  >
                    FAQ
                  </div>
                  <div
                    smooth="true"
                    className="  m-2 py-[5px] px-2 rounded-md text-yellow-light  sm:text-xl "
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
