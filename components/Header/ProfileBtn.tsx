import { FaRegUserCircle } from "react-icons/fa";

function ProfileBtn({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        className="text-white dark:text-success dark:hover:text-primary items-center flex transition-all delay-20 hover:text-primary bg-opacity-40 p-2 rounded-md "
      >
        <FaRegUserCircle className="text-2xl" />
      </button>
    </>
  );
}

export default ProfileBtn;
