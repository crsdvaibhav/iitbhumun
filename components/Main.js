import Image from 'next/image';
import CountdownElement from './Countdown';
import data from '../data/data.json';
import Card from '../components/TestimonialCard';
import SponsorCard from '../components/SponsorCard';

export default function Main() {
  return (
    <div className="w-[90%] mx-auto pt-16 bg-[#F5F5F5]  flex flex-col space-y-24">
      <div className="">
        <p className="font-extrabold font-heading text-center text-[#1A1E21] text-xl sm:text-[2.5rem]">
          We will be back in
        </p>
        <CountdownElement />
      </div>
      <div className="mt-16 flex flex-col space-y-10 w-[58.75rem] sm:w-[73.375rem] mx-auto">
        <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[2.5rem]">
          Legacy
        </p>
        <div className="hidden sm:flex justify-between">
          <div className="flex flex-col items-center">
            <Image
              src="/images/legacy-circles.svg"
              width={230}
              height={230}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-[1.25rem] font-custom text-[#189BA5] font-medium">
              Delegates
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/legacy-circles.svg"
              width={230}
              height={230}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-[1.25rem] font-custom text-[#189BA5] font-medium">
              Countries
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/legacy-circles.svg"
              width={230}
              height={230}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-[1.25rem] font-custom text-[#189BA5] font-medium">
              Conferences
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:hidden">
          <div className="mr-2 flex flex-col items-center">
            <Image
              src="/images/legacy-circles.svg"
              width={100}
              height={100}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-xs font-custom text-[#189BA5] font-semibold">
              Delegates
            </span>
          </div>
          <div className="mx-2 flex flex-col items-center">
            <Image
              src="/images/legacy-circles.svg"
              width={100}
              height={100}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-xs font-custom text-[#189BA5] font-semibold">
              Countries
            </span>
          </div>
          <div className="ml-2 flex flex-col items-center">
            <Image
              src="/images/legacy-circles.svg"
              width={100}
              height={100}
              alt="legacy"
            />
            <span className="mt-[0.25rem] text-xs font-custom text-[#189BA5] font-semibold">
              Conferences
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[#03001E] px-8 sm:text-lg font-light font-custom text-justify">
            {data.legacyText}
          </p>
        </div>
      </div>
      <div className="mt-12 sm:mt-[8.75rem]">
        <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[2.5rem]">
          About us
        </p>
        <div className="flex justify-center mt-8 sm:mt-[3.75rem]">
          <p className="px-8 w-[58.75rem] sm:w-[73.375rem] text-[#03001E] sm:text-lg font-light font-custom text-justify">
            {data.legacyText}
            <br />
            <span className="text-[#189BA5] underline mt-2">
              <a>Meet our secretariat!</a>
            </span>
          </p>
        </div>
      </div>
      <div className="mt-12 sm:mt-[8.75rem]">
        <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[2.5rem]">
          Testimonials
        </p>
        <div className="flex items-center w-full justify-center mt-8 sm:mt-[3.75rem] overflow-x-scroll">
          {data.testimonials.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                designation={item.designation}
                review={item.review}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-12 sm:mt-[8.75rem]">
        <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[2.5rem]">
          Previous collaborators
        </p>
        <div className="mt-[3.75rem] sm:flex justify-center hidden">
          <div className="flex flex-col items-center mx-[5.188rem]">
            <Image
              src="/images/colab-1.svg"
              width={469.48}
              height={166}
              alt="collaborators"
            />
            <span className="font-custom text-[1.25rem] text-[#189BA5] font-medium mt-4">
              UNESCO (INCCU)
            </span>
          </div>
          <div className="flex flex-col items-center mx-[5.188rem]">
            <Image
              src="/images/colab-2.svg"
              width={199.06}
              height={166}
              alt="collaborators"
            />
            <span className="font-custom text-[1.25rem] text-[#189BA5] font-medium mt-4 text-center">
              UN information Centre for
              <br />
              India and Bhutan
            </span>
          </div>
          <div className="flex flex-col items-center mx-[5.188rem]">
            <Image
              src="/images/colab-3.svg"
              width={469.4}
              height={166}
              alt="collaborators"
            />
            <span className="font-custom text-[1.25rem] text-[#189BA5] font-medium mt-4">
              MUN Refugee Challenge
            </span>
          </div>
        </div>
        <div className="sm:hidden mt-4">
          <Image
            src="/images/mobile-collaborators.svg"
            width={1080}
            height={100}
            alt="mobile-collaborators"
          />
          <div className="flex px-8">
            <div className="font-custom font-semibold text-[0.625rem] text-[#189BA5] text-center">
              UNESCO (INCCU
            </div>
            <div className="font-custom font-semibold text-[0.625rem] text-[#189BA5] text-center ml-[1.375rem]">
              UN information Centre <br />
              for India and Bhutan
            </div>
            <div className="font-custom font-semibold text-[0.625rem] text-[#189BA5] text-center ml-[1.25rem]">
              MUN Refugee <br />
              Challenge
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-[8.75rem]">
        <p className="font-bold font-heading text-center text-[#1A1E21] text-xl sm:text-[2.5rem]">
          Previous sponsors
        </p>
        <div className="sm:flex flex-wrap relative justify-center mt-[2.738rem] hidden">
          {data.sponsors.map((item) => {
            return (
              <SponsorCard key={item.id} src={item.src} height={item.height} />
            );
          })}
        </div>
        <div className="sm:hidden mt-8 flex justify-center">
          <div className="w-1/3 bg-white mx-2 px-4 pb-2 pt-4">
            <Image
              src="/images/sponsor-1.png"
              width={107.59}
              height={41.98}
              alt="sponsors"
            />
          </div>
          <div className="w-1/3 bg-white mx-2 px-4 pb-2 pt-[1.25rem]">
            <Image
              src="/images/sponsor-2.png"
              width={107.59}
              height={30.485}
              alt="sponsors"
            />
          </div>
          <div className="w-1/3 bg-white mx-2 px-4 pb-2 pt-4">
            <Image
              src="/images/sponsor-3.png"
              width={107.59}
              height={34.055}
              alt="sponsors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
