export default function ActiveNavbar() {
  return (
    <div className="fixed w-full z-20 shadow-xl shadow-magenta-light/50">
      <div className="bg-yellow-light py-2">
        <div className="hidden sm:block bg-yellow-light rounded-full absolute top-0 left-8 shadow-xl shadow-magenta-light/50">
          <img src="/images/navlogo.svg" className="w-28 p-4"></img>
        </div>
        <div className="flex justify-center sm:justify-end sm:mr-8 font-semibold">
          <button className="m-2 px-2 hover:border-b-magenta-light hover:border-b-2">
            Home
          </button>
          <button className="m-2 px-2 hover:border-b-magenta-light hover:border-b-2">
            FAQ
          </button>
          <button className="m-2 px-2 hover:border-b-magenta-light hover:border-b-2">
            Gallery
          </button>
          <button className="bg-yellow-dark  m-2 py-[3px] px-2 rounded-md text-magenta-dark font-semibold">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
