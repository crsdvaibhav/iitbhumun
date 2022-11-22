import Countdown from 'react-countdown';

export default function CountdownElement() {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="text-center flex justify-center text-3xl sm:text-[6rem] text-[#189BA5] mt-12 sm:mt-[3.75rem] font-bold">
          <div className="flex flex-col mx-[3.063rem]">
            <div className="h-16 sm:h-[10rem] 2xl:h-[13.75rem] 2xl:w-[13.75rem] w-16 sm:w-[10rem] flex items-center justify-center border-[0.125rem] border-[#189BA5] rounded-lg mr-2">
              {days}
            </div>
            <span className="text-xs sm:text-[1.25rem] font-semibold sm:font-medium mt-[0.375rem]">
              Days
            </span>
          </div>
          <div className="flex flex-col mx-2 sm:mx-[3.063rem]">
            <div className="h-16 sm:h-[10rem] 2xl:h-[13.75rem] w-16 sm:w-[10rem] 2xl:w-[13.75rem]  flex items-center justify-center border-[0.125rem] border-[#189BA5] rounded-lg ">
              {hours}
            </div>
            <span className="text-xs sm:text-[1.25rem] font-semibold sm:font-medium mt-[0.375rem]">
              Hours
            </span>
          </div>
          <div className="flex flex-col mx-2 sm:mx-[3.063rem]">
            <div className="h-16 sm:h-[10rem] 2xl:h-[13.75rem] w-16 sm:w-[10rem] 2xl:w-[13.75rem]  flex items-center justify-center border-[0.125rem] border-[#189BA5] rounded-lg">
              {minutes}
            </div>
            <span className="text-xs sm:text-[1.25rem] font-semibold sm:font-medium mt-[0.375rem]">
              Minutes
            </span>
          </div>
          <div className="flex flex-col ml-2 sm:mx-[3.063rem]">
            <div className="h-16 sm:h-[10rem] 2xl:h-[13.75rem] w-16 sm:w-[10rem] 2xl:w-[13.75rem]  flex items-center justify-center border-[0.125rem] border-[#189BA5] rounded-lg">
              {seconds}
            </div>
            <span className="text-xs sm:text-[1.25rem] font-semibold sm:font-medium mt-[0.375rem]">
              Seconds
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <Countdown date="2022-12-3" renderer={renderer} />
    </div>
  );
}
