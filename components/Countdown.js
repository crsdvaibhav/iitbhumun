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
            <div className="text-center flex justify-center text-[92px] sm:text-[96px] text-[#189BA5] mt-[60px]">
                <div className="flex flex-col">
                    <div className="h-[210px] sm:h-[220px] w-[210px] sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg mr-[16.5px] sm:mx-[49px]">{days}</div>
                    <span className="text-[28px] sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Days</span>
                </div>
                <div className="flex flex-col">
                    <div className="h-[210px] sm:h-[220px] w-[210px] sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg mx-[16.5px] sm:mx-[49px]">{hours}</div>
                    <span className="text-[28px] sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Hours</span>
                </div>
                <div className="flex flex-col">
                    <div className="h-[210px] sm:h-[220px] w-[210px] sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg mx-[16.5px] sm:mx-[49px]">{minutes}</div>
                    <span className="text-[28px] sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Minutes</span>
                </div>
                <div className="flex flex-col">
                    <div className="h-[210px] sm:h-[220px] w-[210px] sm:w-[220px] flex items-center justify-center border-[2px] border-[#189BA5] rounded-lg ml-[16.5px] sm:mx-[49px]">{seconds}</div>
                    <span className="text-[28px] sm:text-[20px] font-semibold sm:font-medium mt-[6px]">Seconds</span>
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
