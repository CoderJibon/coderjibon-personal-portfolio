import Drawer from "react-modern-drawer";
import { FaX } from "react-icons/fa6";
import Profile from "./Profile";
type DrawerProps = {
  open: boolean;
  onClose: () => void;
};
function ProfileDrawer({ open, onClose }: DrawerProps) {
  return (
    <Drawer open={open} onClose={onClose} direction={"right"}>
      <div className="p-3 overflow-y-auto bg-[#1F1F24] dark:bg-white h-screen">
        <div className="flex justify-between items-center">
          <button
            onClick={onClose}
            className="text-white border dark:text-success border-gray-300 rounded-md hover:bg-primary transition-all dark:hover:text-white hover:text-white text-xs p-2"
          >
            <FaX />
          </button>
          <div></div>
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </Drawer>
  );
}

export default ProfileDrawer;
