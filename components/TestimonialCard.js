export default function Card(props) {
  return (
    <div className="border-[0.125rem] border-[#189BA5] min-w-[75%] sm:min-w-0 flex flex-col justify-start items-center mx-4 px-2 sm:px-6 py-6 2xl:px-16 sm:mx-[1.254rem] rounded-lg">
      <p className="font-heading font-bold text-center sm:font-semibold sm:text-[1.5rem] text-[#189BA5]">
        {props.name}
      </p>
      <p className="sm:mt-[0.625rem] font-custom font-normal text-xs sm:text-[1.125rem] text-[#189BA5]">
        {props.designation}
      </p>
      <p className="my-4 px-2 sm:px-0 sm:mt-[3.125rem] text-justify font-custom font-medium text-xs sm:text-[1.25rem] overflow-auto sm:overflow-hidden sm:leading-6">
        {props.review}
      </p>
    </div>
  );
}
