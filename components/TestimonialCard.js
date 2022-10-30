export default function Card(props){
    return(
        <div className="w-72 sm:w-[565.5px] h-40 sm:h-[430px] border-[2px] border-[#189BA5] flex flex-col justify-start items-center mx-4 sm:mx-[20.06px] rounded-lg">
            <p className="mt-2 sm:mt-[30px] font-heading font-bold sm:font-semibold sm:text-[24px] text-[#189BA5]">{props.name}</p>
            <p className="sm:mt-[10px] font-custom font-normal text-xs sm:text-[18px] text-[#189BA5]">{props.designation}</p>
            <p className="my-4 sm:my-0 px-4 sm:px-0 sm:mt-[50px] w-[280px] sm:w-[435.45px] font-custom font-medium text-xs sm:text-[20px] text-left overflow-auto sm:overflow-hidden">{props.review}</p>
        </div>
    )
}