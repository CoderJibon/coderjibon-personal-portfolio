import Link from "next/link.js";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="p-[5px] md:p-[15px]">
      <div className="bg-darkLight dark:bg-white dark:border shadow-sm py-2 px-4 rounded-md sm:flex items-center text-center justify-between">
        <p className="text-sm text-white dark:text-darkLight">
          CoderJibon © 2019-{currentYear} All Rights Reserved.
        </p>
        <Link
          className="text-sm text-white dark:text-darkLight"
          target="_blank"
          href={"mailto:contact.engjibon@gmail.com"}
        >
          Email : contact.engjibon@gmail.com
        </Link>
      </div>
    </div>
  );
}

export default Footer;
