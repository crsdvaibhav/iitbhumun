import Countdown from "react-countdown"

export default function CountdownElement() {

    const Completionist = () => <span>You are good to go!</span>

    const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            <div className="text-center flex justify-center text-3xl sm:text-[96px] text-[#189BA5] mt-12 sm:mt-[60px] font-bold">
                <div className="flex flex-col sm:mx-[49px]">
                    <div className="h-16 sm:h-[220px] w-16 sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg mr-2">{days}</div>
                    <span className="text-xs sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Days</span>
                </div>
                <div className="flex flex-col mx-2 sm:mx-[49px]">
                    <div className="h-16 sm:h-[220px] w-16 sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg ">{hours}</div>
                    <span className="text-xs sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Hours</span>
                </div>
                <div className="flex flex-col mx-2 sm:mx-[49px]">
                    <div className="h-16 sm:h-[220px] w-16 sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg">{minutes}</div>
                    <span className="text-xs sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Minutes</span>
                </div>
                <div className="flex flex-col ml-2 sm:mx-[49px]">
                    <div className="h-16 sm:h-[220px] w-16 sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg">{seconds}</div>
                    <span className="text-xs sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Seconds</span>
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
