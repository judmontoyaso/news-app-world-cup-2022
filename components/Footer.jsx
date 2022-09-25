import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-1 sm:pb-36 sm:py-12 py-6 lg:pb-7">
      <div className="max-w-4xl px-4 mx-auto text-gray-700 dark:text-gray-300">
        <div className="pb-4 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p className="text-xs ml-3">
            Built with Next.js, Tailwind and deploy on Vercel, by{" "}
            <a
              href="https://juandeveloper.ninja"
              className={"transition-colors hover:text-yellow-500"}
            >
              JuanDeveloper.ninja
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
