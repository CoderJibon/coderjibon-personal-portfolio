import { FaBloggerB, FaUserTie } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";

export const Menu = [
  {
    id: 1,
    label: "Home",
    url: "/",
    icon: <RiHome6Line />,
  },
  {
    id: 2,
    label: "About",
    url: "/about",
    icon: <FaUserTie />,
  },
  {
    id: 3,
    label: "Portfolio",
    url: "/portfolio",
    icon: <MdWorkOutline />,
  },
  {
    id: 4,
    label: "Blog",
    url: "/blog",
    icon: <FaBloggerB />,
  },
  {
    id: 5,
    label: "Contact Me",
    url: "/contact",
    icon: <GrContact />,
  },
];
