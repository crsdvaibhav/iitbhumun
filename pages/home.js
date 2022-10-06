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
        <div className="my-12 bg-[url('/images/bg-2.png')] bg-cover h-[70vh] shadow-magenta-light/30 shadow-xl">
          <div className='flex flex-col sm:flex-row h-[100%] bg-magenta-dark bg-opacity-50'>
            <div className='sm:w-3/5 flex p-4 items-start justify-start my-8'>
              <div className='flex items-center'>
                <img src='/images/logo-2.png' className='sm:h-28 h-20 mx-4'></img>
                <img src='/images/logo-3.png' className='sm:h-16 h-8 mx-4'></img>
              </div>
            </div>
            <div className='sm:w-2/5 flex flex-col items-center justify-center text-yellow-light'>
              <p className='text-justify text-xs sm:text-base sm:mx-12 mx-8'>{data.body}</p>
              <div className='flex justify-end p-2'><button className="bg-yellow-dark sm:w-36 w-28 m-2 py-[5px] rounded-md text-magenta-dark text-xs sm:text-base font-bold">Register</button></div>
            </div>
          </div>
        </div>
        <div className='bg-yellow-light'>
            <div className='mt-20 border-t-[2px] border-magenta-light'>
              <div className='mx-12 p-2 flex border-b-[1px] border-magenta-light'>
                <div className='w-2/4 flex flex-col p-2'>
                  <div className='flex'>
                    <img src='/images/logo-4.png' className='h-16 m-2'></img>
                    <div>
                      <img src='/images/logo-5.png' className='h-16 m-2'></img>
                      <p className='pr-20 text-justify sm:text-base text-xs'>{data.footerdata}</p>
                    </div>
                  </div>
                </div>
                <div className='w-1/4 flex flex-col justify-center'>
                  <div className='m-2'>
                    <p className='text-magenta-light text-xl font-bold my-2'>Explore</p>
                    <span className='mr-4'>Home</span>
                    <span className='border-x-[2px] border-magenta-dark px-4'>FAQ</span>
                    <span className='mx-4'>About us</span>
                  </div>
                  <div className='m-2'>
                    <p className='text-magenta-light text-xl font-bold my-2'>Follow us</p>
                    <span className='mr-4'>Home</span>
                    <span className='border-x-[2px] border-magenta-dark px-4'>FAQ</span>
                    <span className='mx-4'>About us</span>
                  </div>
                </div>
                <div className='w-1/4 flex flex-col justify-center'>
                  <div className='text-magenta-light text-xl font-bold my-2 text-left'>Contact</div>
                  <div>
                    <div className='py-2'>+91 8645951255</div>
                    <div className='py-2'>name@itbhu.ac.in</div>
                    <div className='py-2'>IIT BHU, Varanasi</div>
                  </div>
                </div>
              </div>
              <div className='p-2 text-center text-xs'>
                All rights reserved.Privacy.Terms & Conditons
              </div>
            </div>
        </div>
      </div>
    )
}
  