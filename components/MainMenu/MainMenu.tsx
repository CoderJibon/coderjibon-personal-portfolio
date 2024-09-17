import { Menu } from "@/data/Data";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainMenu() {
  const pathName = usePathname();
  return (
    <div className="flex lg:space-x-14 space-x-8">
      {Menu.map((menu) => (
        <Link
          key={menu.id}
          className="text-white font-helvetica text-base font-semibold relative flex  items-center  justify-center w-fit "
          href={menu.url}
        >
          <span className="text-xl absolute -left-[30px] hidden lg:block ">
            {menu.icon}
          </span>
          <p
            className={`menuItem ${
              pathName === menu.url ? "after:scale-x-100" : ""
            } `}
          >
            {menu.label}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default MainMenu;