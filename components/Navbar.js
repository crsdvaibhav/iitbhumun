export default function NavBar() {
  return (
    <div className="absolute top-0 w-full h-[90px] backdrop-opacity-0 z-30 font-medium py-[22px] pr-[69.5px]">
      <div className="flex justify-end">
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Home</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Committees</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Secretariat</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>Gallery</a></button>
        <button className="w-[160px] h-[46px] text-white text-[20px]"><a>FAQ</a></button>
        <button className="w-[160px] h-[46px] text-black bg-[#F5CE3F] rounded-md text-[18px] font-semibold"><a>Register</a></button>
      </div>
    </div>
  );
}
