import Link from "next/link";
import { useState } from "react";



const Doubtbox = () => {
    const [doubt, setDoubt] = useState('');

    const handleChange = (event) => {
      setDoubt(event.target.value);
    };
    const handleExpand = () => {
        setIsExpanded(true);
      };
    
      const handleCollapse = () => {
        setIsExpanded(false);
        setDoubt('');
      };
      const [isExpanded, setIsExpanded] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add your logic here to handle the submitted doubt (e.g., send it to the server).
      console.log('Doubt submitted:', doubt);
      setDoubt('');
    };
  
    return (
        <div className="fixed bottom-4 right-4">
        {isExpanded ? (
          <div className="bg-gray-100 px-4 py-2 border-2 border-black rounded-2xl shadow">
           <div className="flex ">
           <img src="/images/active-nav-log.svg" className="mb-2 inline mx-auto h-20 w-fit "/>
            <div className="flex justify-end ">
              <button
                type="button"
                className="text-gray-500 hover:text-red-500 p-1"
                onClick={handleCollapse}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
             
            </div>
          </div>
<h1 className="font-bold text-lg text-blue-500">Follow us!</h1>

<div className="mt-[1.25rem] flex flex-row space-x-4">
               
                <div>
                  <Link href="https://www.linkedin.com/company/iitbhumun/?originalSubdomain=in " >
<button className="cursor:pointer">
                      <img src="https://img.freepik.com/free-icon/linkedin_318-157468.jpg?size=626&ext=jpg&ga=GA1.1.353350214.1689486593&semt=sph" className="w-12 h-12 rounded-full hover:w-14 hover:h-14 transition-all"/>
                    </button>
                  </Link>
                </div>
                <div>
                  <Link href="https://twitter.com/iitbhu_mun">
                    <button>
                    
  <img src="https://img.freepik.com/free-icon/twitter_318-187597.jpg?size=626&ext=jpg&ga=GA1.1.353350214.1689486593&semt=sph" className="w-12 h-12 rounded-full hover:w-14 hover:h-14 transition-all"/>
                    </button></Link>
                </div> <div>
                  <Link href="https://www.instagram.com/iitbhu_mun/?hl=en">
<button className="cursor:pointer mb-2">
                      <img src="https://smallimg.pngkey.com/png/small/448-4486200_instagram-logo-circle.png" className="w-12  h-12 rounded-full hover:w-14 hover:h-14 transition-all"/>
                    </button>
                  </Link>
                </div>
               <div >
                    <Link href="https://discord.gg/5VJPdtaX2G">
  <button className="cursor:pointer">
  <img src="https://img.freepik.com/free-icon/discord_318-688926.jpg?size=626&ext=jpg&ga=GA1.1.353350214.1689486593&semt=ais"className="w-12 h-12 rounded-full hover:w-14 hover:h-14 transition-all"/>
                      
                      </button>
                    </Link>
                  </div>
              </div>

            <h1 className="mb-2 font-bold">Ask a doubt</h1>
            <form onSubmit={handleSubmit}>
              <textarea
                className="w-64 h-16 text-black border-2 placeholder-red-500 border-black resize-none  rounded p-2 mb-2"
                placeholder="Enter your doubt here..."
                value={doubt}
                onChange={handleChange}
              />
              <div className="flex justify-between">
                <button  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"><a href="mailto:information@iitbhumun.com">Send Email</a></button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : (
          <button
            className=" bg-center bg-no-repeat bg-cover text-white px-4 w-20 h-20    py-2 rounded-full  shake-and-rotate"
            style={{ backgroundImage: 'url("/images/emoji.png")' }} onClick={handleExpand}
          >
           
          </button>
        )}
      </div>
    );



















}
export default Doubtbox;