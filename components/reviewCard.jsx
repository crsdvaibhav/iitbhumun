export default function ReviewCard(props){
    return (
        <div>
            <div className="flex flex-col items-center p-4 pb-12 w-[300px] border-2 border-magenta-light rounded-lg m-2 sm:m-0">
                <img src="/images/person.png" alt="person" className="w-32"></img>
                <p className="text-xl sm:text-2xl text-magenta-dark font-bold">{props.name}</p>
                <p className="sm:text-xl text-magenta-darkfont-semibold">{props.country}</p>
                <p className="text-xs sm:text-base text-magenta-light text-center p-2">{props.review}</p>
            </div>
        </div>
    )
}