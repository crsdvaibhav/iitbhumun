import data from '../data/data.json'
import ReviewCard from '../components/reviewCard'

export default function Home() {
    return (
      <div className="bg-yellow-light">
        <div className="bg-[url('../public/images/bg-image-delegates(1).jpg')] bg-cover sm:h-[85vh] h-[75vh] shadow-magenta-light/30 shadow-xl">
          <div className="flex flex-col justify-center items-center h-[100%] brightness-100">
              <img src="/images/logo.png" className="sm:w-1/2 w-3/4 mt-12"></img>
              <div className="flex my-12 p-2">
                  <div><button className="bg-yellow-dark sm:w-36 w-28 m-2 py-[5px] rounded-md text-magenta-dark sm:text-xl font-bold">Register</button></div>
                  <div><button className="border-[2px] border-white text-white text-yellow-light sm:text-xl font-bold sm:w-36 w-28 m-2 py-[3px] rounded-md">About us</button></div>
              </div>
          </div>
        </div>
        <div>
            <div className="flex justify-around items-center">
              <div className="text-center sm:text-xl text-magenta-light font-bold"><img src="/images/delegates.png" alt="delegates" className="sm:w-32 w-24 mt-12 mb-4"></img>Delegates</div>
              <div className="text-center sm:text-xl text-magenta-light font-bold"><img src="/images/countries.png" alt="countries" className="sm:w-32 w-24 mt-12 mb-4"></img>Countries</div>
              <div className="text-center sm:text-xl text-magenta-light font-bold"><img src="/images/conferences.png" alt="conferences" className="sm:w-32 w-24 mt-12 mb-4"></img>Conferencees</div>
            </div>
        </div>
        <div className='text-center my-4 mx-12 p-4 sm:p-8 sm:text-xl'>
            {data.body}
        </div>
        <div>
          <p className='text-2xl sm:text-3xl text-magenta-light text-center font-bold'>About Us</p>
          <p className='text-center mx-12 sm:p-8 p-4'>{data.body}</p>
        </div>
        <div>
          <p className='text-3xl text-magenta-light text-center font-bold mb-8'>Reviews</p>
          <div className='flex flex-col sm:flex-row sm:justify-around items-center'>
            {data.reviews.map((i)=>{
              return (
                  <ReviewCard
                    name = {i.name}
                    country = {i.country}
                    review = {i.review}
                  />
              )
            })}
          </div>
        </div>
      </div>
    )
}
  