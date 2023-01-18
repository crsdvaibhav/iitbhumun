import Image from "next/image"
export default function SponsorCard(props) {

    return (
        < div className="w-[18.938rem] h-[7.75rem] m-auto flex justify-center items-center bg-white/60" >
            < div className="bg-white" >
                <a href={`${props.href}`} target="_blank">
                    <Image src={props.src} width={1080} height={props.height} alt="sponsors" />
                </a >
            </div>
        </div >
    )
}