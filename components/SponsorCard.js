import Image from "next/image"

export default function SponsorCard(props){
    return(
        <div className="w-[18.938rem] h-[7.75rem] mx-[3.564rem] my-[1.013rem] flex justify-center items-center bg-white/60">
            <div>
                <Image src={props.src} width={200} height={props.height} alt="sponsors" />
            </div>
        </div>
    )
}