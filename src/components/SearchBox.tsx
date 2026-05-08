export default function SearchBox() {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search company or role"
        className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-[10px] w-96 h-12 text-sm max-w-[280px] py-[9px] mb-4 px-3"
      ></input>
        <button className="m-4 text-[#FFFF] bg-black rounded-[10px] w-12 h-8">All</button>
        <button className="m-4 text-[#FFFF] bg-black rounded-[10px] w-12 h-8 text-sm">Applied</button>
        <button className="m-4 text-[#FFFF] bg-black rounded-[10px] w-12 h-8 text-sm">Interview</button>
        <button className="m-4 text-[#FFFF] bg-black rounded-[10px] w-12 h-8">Offer</button>
        <button className="m-4 text-[#FFFF] bg-black rounded-[10px] w-12 h-8 text-sm hover:bg-gray-600">Rejected</button>
    </div>
  );
}
