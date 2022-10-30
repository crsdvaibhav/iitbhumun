export default function Card(props){
    return(
        <div className="w-[838px] sm:w-[565.5px] h-[500px] sm:h-[430px] border-[2px] border-[#189BA5] flex flex-col justify-start items-center sm:mx-[20.06px] rounded-lg">
            <p className="mt-[30px] font-heading font-semibold text-[24px] text-[#189BA5]">{props.name}</p>
            <p className="mt-[10px] font-custom font-normal text-[18px] text-[#189BA5]">{props.designation}</p>
            <p className="mt-[50px] w-[435.45px] font-custom font-medium text-[20px] text-left">{props.review}</p>
        </div>
    )
}