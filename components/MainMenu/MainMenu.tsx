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
          className="text-gray-400 dark:text-success font-helvetica text-base font-semibold relative flex hover:text-white dark:hover:text-primary  items-center  justify-center w-fit "
          href={menu.url}
        >
          <span
            className={`text-xl absolute -left-[30px] hidden lg:block ${
              pathName === menu.url ? "text-white dark:text-primary" : ""
            } `}
          >
            {menu.icon}
          </span>
          <p
            className={`menuItem ${
              pathName === menu.url
                ? "after:scale-x-100 text-white dark:text-primary "
                : ""
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
