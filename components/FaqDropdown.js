import { useState } from "react"

export default function Dropdown(props){

    const [isActive, setIsActive] = useState(false)

    return(
        <div className={isActive ? "flex flex-col mx-[8.188rem] mb-[2.938rem] w-[34.313rem] h-[12.563rem] bg-white shadow-black/50 shadow-md rounded-lg px-4 py-2 font-custom text-[1.375rem]" : "flex flex-col mx-[8.188rem] mb-[2.938rem] w-[34.313rem] h-[4rem] bg-white shadow-black/50 shadow-md rounded-lg px-4 py-2 font-custom text-[1.375rem]"}>
            <div className="flex justify-between items-center overflow-hidden">
                <div className={isActive ? "py-2 font-semibold" : "py-2"}>Q.{props.id} {props.question}</div>
                <div className="py-2 text-[20px] font-bold"><button onClick={()=>setIsActive(!isActive)}>{isActive ? "-" : "+"}</button></div>
            </div>
            {isActive ? <div className="h-[100%] pb-2 font-custom text-[1.125rem] font-light flex items-center justify-center border-t-[1px] border-black/30"> 
                {props.ans}
            </div> : <></>}
        </div>
    )
}