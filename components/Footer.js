import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-[#1A1E21] w-full">
      <div className="hidden flex-col mt-[8.75rem] text-white sm:flex  max-w-[90%] 2xl:max-w-[80%] mx-auto ">
        <div className="flex flex-row justify-between mt-[3.75rem]">
          <div className="max-w-1/4">
            <div className="flex flex-col">
              <div className="font-custom text-[1.5rem] font-bold">Explore</div>
              <div className="mt-[1.25rem] flex-wrap space-y-3 space-x-0 md:flex justify-between md:space-x-3 font-custom text-[1rem] sm:text-[1.125rem] 2xl:text-[1.25rem] font-medium">
                <div className="">Home</div>
                <div className="">Committees</div>
                <div className="">Secretariat</div>
                <div className="">Gallery</div>
                <div className="">FAQs</div>
              </div>
              <div>
                <div className="font-custom text-[1.5rem] font-bold mt-[3.75rem]">
                  Contact us
                </div>
                <div className="mt-[1.25rem] flex flex-col font-custom text-[1.25rem] font-medium">
                  <div>
                    <a className="flex">
                      <Image
                        src="/images/location.svg"
                        width={24}
                        height={28.8}
                        alt="location"
                      />
                      <p className="pl-[2.063rem]">
                        IIT (BHU), Varanasi, India.
                      </p>
                    </a>
                  </div>
                  <div className="mt-[1.481rem]">
                    <a className="flex">
                      <Image
                        src="/images/mail.svg"
                        width={24}
                        height={19.2}
                        alt="mail"
                      />
                      <p className="pl-[2.063rem]">
                        IIT secretariat@iitbhumun.com
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/3">
            <div>
              <div className="font-custom text-[1.5rem] font-bold">
                Participation
              </div>
              <div>
                <button className="bg-[#189BA5] text-[1.125rem] font-custom font-medium mt-[1.25rem] text-black rounded-lg px-10 py-3">
                  Register
                </button>
              </div>
            </div>
            <div className="mt-[3.75rem]">
              <div className="font-custom text-[1.5rem] font-bold mt-[3.75rem]">
                Follow us
              </div>
              <div className="mt-[1.25rem] flex flex-row space-x-5">
                <div>
                  <Image
                    src="/images/ig.svg"
                    width={24.08}
                    height={24.08}
                    alt="icons"
                  />
                </div>
                <div>
                  <Image
                    src="/images/linkedin.svg"
                    width={24}
                    height={21}
                    alt="icons"
                  />
                </div>
                <div>
                  <Image
                    src="/images/twitter.svg"
                    width={28}
                    height={22}
                    alt="icons"
                  />
                </div>
                <div>
                  <Image
                    src="/images/medium.svg"
                    width={38.5}
                    height={22}
                    alt="icons"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-[0.875rem] font-custom font-normal text-[1rem]">
          © 2023 All Rights Reserved
        </div>
      </div>

      <div className="bg-[#1A1E21] mt-12 text-white px-4 sm:hidden flex flex-col items-center font-custom">
        <div className="w-full flex items-start mt-8">
          <div className="w-1/4 mr-2 flex justify-center items-center">
            <Image
              src="/images/footer-logo.svg"
              width={60}
              height={60}
              alt="footerlogo"
            />
          </div>
          <div className="w-1/2 ml-2 flex flex-col">
            <div>
              <p className="font-bold"> Explore</p>
              <div className="flex flex-wrap text-xs mt-2">
                <div className="w-20 mb-[2px]">Home</div>
                <div className="w-20 my-[2px]">Gallery</div>
                <div className="w-20 my-[2px]">Committees</div>
                <div className="w-20 my-[2px]">FAQs</div>
                <div className="w-20 mt-[2px]">Secretariat</div>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-bold">Contact us</p>
              <div className="flex flex-col text-xs mt-2">
                <div className="flex items-center my-[2px]">
                  <Image
                    src="/images/location.svg"
                    width={10}
                    height={13}
                    alt="icons"
                  />
                  <span className="ml-2 text-[10px]">
                    IIT (BHU), Varanasi, India.
                  </span>
                </div>
                <div className="flex items-center my-[2px]">
                  <Image
                    src="/images/mail.svg"
                    width={10}
                    height={13}
                    alt="icons"
                  />
                  <span className="ml-2 text-[10px]">
                    secretariat@iitbhumun.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 ml-4">
            <div className="flex flex-col">
              <p className="font-bold">Participation</p>
              <button className="bg-[#189BA5] w-20 py-2 rounded-lg mt-2 text-xs font-semibold">
                Register
              </button>
            </div>
            <div className="mt-[44px]">
              <p className="font-bold">Follow us</p>
              <div className="flex flex-col mt-2">
                <div className="flex">
                  <div className="mr-2">
                    <Image
                      src="/images/ig.svg"
                      width={18}
                      height={18}
                      alt="icons"
                    />
                  </div>
                  <div className="ml-2">
                    <Image
                      src="/images/linkedin.svg"
                      width={18}
                      height={18}
                      alt="icons"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-2">
                    <Image
                      src="/images/twitter.svg"
                      width={18}
                      height={18}
                      alt="icons"
                    />
                  </div>
                  <div className="ml-2">
                    <Image
                      src="/images/medium.svg"
                      width={18}
                      height={18}
                      alt="icons"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-2 text-[10px]">© 2023 All Rights Reserved</div>
      </div>
    </div>
  );
}
