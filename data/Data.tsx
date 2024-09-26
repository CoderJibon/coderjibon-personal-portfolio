import {
  FaBloggerB,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaNpm,
  FaSass,
  FaShopify,
  FaUserTie,
} from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { RiHome6Line, RiTailwindCssFill } from "react-icons/ri";
//skills icons
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobexd, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode, FaReact } from "react-icons/fa6";

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
    id: 6,
    label: "Shopify",
    url: "/shopify",
    icon: <FaShopify />,
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

export const Skill = [
  {
    id: 1,
    icon: <FaNode />,
    label: "Node JS",
  },
  {
    id: 2,
    icon: <IoLogoJavascript />,
    label: "Javascript",
  },
  {
    id: 3,
    icon: <SiExpress />,
    label: "Express",
  },
  {
    id: 4,
    icon: <BiLogoMongodb />,
    label: "Mongodb",
  },
  {
    id: 5,
    icon: <FaReact />,
    label: "React",
  },
  {
    id: 6,
    icon: <RiNextjsFill />,
    label: "Next JS",
  },
  {
    id: 7,
    icon: <TbBrandRedux />,
    label: "Redux Toolkit",
  },
  {
    id: 8,
    icon: <FaFigma />,
    label: "Figma To HTML",
  },
  {
    id: 9,
    icon: <SiAdobexd />,
    label: "XD To HTML",
  },
  {
    id: 10,
    icon: <FaSass />,
    label: "Sass",
  },
  {
    id: 11,
    icon: <RiTailwindCssFill />,
    label: "Tailwind Css",
  },
  {
    id: 12,
    icon: <FaBootstrap />,
    label: "Bootstrap",
  },
  {
    id: 13,
    icon: <FaShopify />,
    label: "Shopify Liquid",
  },
  {
    id: 14,
    icon: <FaGithub />,
    label: "Github",
  },
  {
    id: 14,
    icon: <FaNpm />,
    label: "NPM",
  },
];
