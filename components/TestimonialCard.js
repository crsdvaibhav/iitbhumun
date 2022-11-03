export default function Card(props){
    return(
        <div className="w-72 sm:w-[35.406rem] h-40 sm:h-[26.875rem] border-[0.125rem] border-[#189BA5] flex flex-col justify-start items-center mx-4 sm:mx-[1.254rem] rounded-lg">
            <p className="mt-2 sm:mt-[1.875rem] font-heading font-bold sm:font-semibold sm:text-[1.5rem] text-[#189BA5]">{props.name}</p>
            <p className="sm:mt-[0.625rem] font-custom font-normal text-xs sm:text-[1.125rem] text-[#189BA5]">{props.designation}</p>
            <p className="my-4 px-4 sm:px-0 sm:mt-[3.125rem] w-[17.5rem] sm:w-[27.216rem] font-custom font-medium text-xs sm:text-[1.25rem] text-left overflow-auto sm:overflow-hidden sm:leading-6">{props.review}</p>
        </div>
    )
}