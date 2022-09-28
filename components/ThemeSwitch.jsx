import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="   
        focus:outline outline-none ml-4"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"
        )
      }
    >
      {/* <div className="rounded-full h-6 w-6 bg-gray-200 dark:transform dark:translate-x-7 dark:absolute duration-700 absolute"></div> */}

      <>
        <FontAwesomeIcon
          icon={
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? faSun
              : faMoon
          }
          size="1x"
          className={
            mounted && (theme === "dark" || resolvedTheme === "dark")
              ? "text-white text-2xl hover:text-yellow-300 "
              : "text-black text-2xl hover:text-blue-600"
          }
        />
      </>
    </button>
  );
};

export default ThemeSwitch;
