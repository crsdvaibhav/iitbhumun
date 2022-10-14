export default function NavBar() {
  return (
    <div>
      <div className="fixed w-full z-20">
        <div className="flex justify-center sm:justify-end sm:mr-8 font-semibold">
          <button
            smooth="true"
            className="m-2 py-[5px] px-2 rounded-md text-yellow-light"
          >
            Home
          </button>
          <button
            smooth="true"
            className="m-2 py-[5px] px-2 rounded-md text-yellow-light"
          >
            FAQ
          </button>
          <button
            smooth="true"
            className="m-2 py-[5px] px-2 rounded-md text-yellow-light"
          >
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
