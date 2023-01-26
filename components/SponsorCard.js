import Image from "next/image"
export default function SponsorCard(props) {

    return (
        < div className="w-[18.938rem] h-[7.75rem] m-[3.5rem] flex justify-center items-center bg-white/60" >
            < div className="bg-white" >
                <a href={`${props.href}`} >
                    <Image src={props.src} width={3000} height={1500} alt="sponsors" />
                </a >
            </div>
        </div >
    )
}