export default function ReviewCard(props){
    return (
        <div className="bg-gradient-to-b from-yellow-light to-magenta-light p-[5px] rounded-lg">
            <div className="flex flex-col items-center p-4 pb-12 w-[300px] bg-yellow-light rounded-lg mt-4 sm:m-0">
                <img src="/images/person.png" alt="person" className="w-32"></img>
                <p className="text-xl sm:text-2xl text-magenta-dark font-bold">{props.name}</p>
                <p className="sm:text-xl text-magenta-darkfont-semibold">{props.country}</p>
                <p className="text-xs sm:text-base text-magenta-light text-center p-2">{props.review}</p>
            </div>
        </div>
    )
}