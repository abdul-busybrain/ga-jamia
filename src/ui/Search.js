import { HiSearch } from "react-icons/hi";

function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search courses #"
        className="pl-4 pr-10 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        <HiSearch className="text-gray-400 w-5 h-5" />
      </div>
    </div>
  );
}

export default Search;
