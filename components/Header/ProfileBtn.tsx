import { FaRegUserCircle } from "react-icons/fa";

function ProfileBtn({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-white items-center flex transition-all delay-20 hover:text-primary bg-opacity-40 p-2 rounded-md "
      >
        <FaRegUserCircle className="text-xl" />
      </button>
    </>
  );
}

export default ProfileBtn;
