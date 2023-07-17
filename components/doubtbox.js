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
          <div className="bg-gray-100 p-4 border-2 border-black rounded shadow">
           
            <div className="flex justify-end">
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
            <h1>Ask a doubt</h1>
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
            className=" bg-center bg-no-repeat bg-cover text-white px-4 w-24 h-24 border-red-300 border-4  py-2 rounded-full hover:bg-blue-600"
            style={{ backgroundImage: 'url("/images/doubt.png")' }} onClick={handleExpand}
          >
           
          </button>
        )}
      </div>
    );



















}
export default Doubtbox;