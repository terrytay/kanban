import { MenuIcon, XCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
function Nav() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`${
        isOpened ? "w-64" : "w-0"
      } group-transform ease-in-out duration-100 sm:w-64 px-8 py-3 bg-gray-100 border-r relative`}
    >
      <MenuIcon
        onClick={() => setIsOpened(true)}
        className={`${
          isOpened ? "hidden" : ""
        } sm:hidden h-9 w-9 m-2 ml-3 text-gray-500 absolute top-0 left-0 cursor-pointer`}
      />
      <XCircleIcon
        onClick={() => setIsOpened(false)}
        className={`${
          isOpened ? "" : "hidden"
        } sm:hidden h-9 w-9 text-gray-500 absolute m-2 top-0 right-2 cursor-pointer`}
      />
      <div className={`${isOpened ? "" : "hidden"} sm:block`}>
        <img loading="lazy" src="/images/T.png" className="rounded-full shadow-lg h-20 w-20" />
        <nav className="mt-8">
          <h2 className="text-gray-600 font-semibold text-xs uppercase tracking-wide">Documents</h2>
          <div className="mt-2 -mx-3">
            <a href="#" className="navLink bg-gray-300">
              <span className="text-sm font-medium text-gray-900">All</span>
              <span className="text-xs font-semibold text-gray-700">36</span>
            </a>
            <a href="#" className="navLink">
              <span className="text-sm font-medium text-gray-900">Archived</span>
              <span className="text-xs font-semibold text-gray-700">0</span>
            </a>
          </div>
          <h2 className="mt-8 text-gray-600 font-semibold text-xs uppercase tracking-wide">Tags</h2>
          <div className="mt-2 -mx-3">
            <a href="#" className="navLink">
              <span className="text-sm font-medium text-gray-900">CS3230</span>
            </a>
            <a href="#" className="navLink">
              <span className="text-sm font-medium text-gray-900">CS4242</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
