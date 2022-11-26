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
        <div className="grid grid-cols-4 gap-3 lg:gap-5 mt-12 max-w-[90%] lg:max-w-[80%] 2xl:max-w-[60%] mx-auto">
          {[days, hours, minutes, seconds].map((count) => (
            <div
              key={count}
              className="p-5 md:py-8 lg:py-10 text-4xl sm:text-5xl md:text-7xl rounded-md text-cyan-600 text-center border-cyan-600 border-2"
            >
              {count}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full">
      <Countdown date="2023-02-3" renderer={renderer} />
    </div>
  );
}
