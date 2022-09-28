import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faClose,
  faHamburger,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "next-themes";
import ActiveRoute from "./ActiveRoute";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const Navigation = () => {
  const [active, setActive] = useState(false);
  const { theme } = useTheme();
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="sticky top-0 z-20 py-2 bg-gray-200 md:py-4  dark:bg-black  transition-all duration-1000">
      <button
        className="float-left pr-3 pl-3 pt-1 dark:hover:text-gray-400 hover:text-gray-600 rounded-sm lg:hidden text-black ml-auto outline-none justify-end dark:text-white  hover:text-xl"
        onClick={handleClick}
      >
        {!active ? (
          <FontAwesomeIcon icon={faBars} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faClose} size="lg" />
        )}
      </button>

      <ThemeSwitch></ThemeSwitch>
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto lg:float-right`}
      >
        <div className=" lg:inline-flex lg:flex-row lg:ml-auto lg:mr-10 lg:w-auto w-full lg:items-center items-end  flex flex-col lg:h-auto  lg:sticky absolute dark:bg-black dark:bg-opacity-80 bg-white lg:bg-transparent lg:dark:bg-transparent bg-opacity-80  transition-color duration-1000">
          <ActiveRoute href="/">
            <RoughNotation
              color={theme === "dark" ? "#1ACF79 " : "#2db7f5"}
              type={"underline"}
            >
              <FontAwesomeIcon icon={faNewspaper} size="lg" />
              <span className="lg:ml-2 ml-5 "> News</span>
            </RoughNotation>
          </ActiveRoute>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
