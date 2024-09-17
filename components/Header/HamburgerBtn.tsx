import { MdMenuOpen } from "react-icons/md";

function HamburgerBtn({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-white items-center flex transition-all delay-200 hover:bg-primary hover:text-black bg-opacity-40 p-2 rounded-md border-2 border-gray-300 "
      >
        <MdMenuOpen className="text-xl sm:text-2xl" />
      </button>
    </>
  );
}

export default HamburgerBtn;
