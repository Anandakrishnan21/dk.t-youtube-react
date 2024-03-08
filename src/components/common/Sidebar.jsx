import React from "react";
import { useSidebarContext } from "../../context/SidebarContext";
import { categories, medias } from "../../constants/constants";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export function SideBar({ selectedCategory, setSelectedCategory }) {
  const { isLargeOpen, isSmallOpen } = useSidebarContext();
  const commonClasses =
    "flex flex-col overflow-y-auto scrollbar-hidden bg-neutral-50 dark:bg-neutral-950 dark:border-r-neutral-800 dark:border-[1px] p-4";
  const commonClasses1 =
    "bg-neutral-200 dark:bg-neutral-900 border-[1px] border-neutral-200 dark:border-neutral-700 hover:dark:border-neutral-700 duration-500 dark:text-white font-bold text-sm";
  const commonClasses2 =
    "border-[1px] border-neutral-50 dark:border-neutral-950 hover:bg-neutral-200 hover:dark:bg-neutral-900 dark:text-neutral-400 duration-200 font-normal";
  return (
    <>
      <aside
        className={`${commonClasses} sticky top-0 justify-between z-10 shadow-md shadow-neutral-300 dark:shadow-neutral-800 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <ul className="flex flex-col gap-2 w-full">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
            >
              <p
                className={classNames(
                  category.name === selectedCategory
                    ? `${commonClasses1}`
                    : `${commonClasses2}`,
                  "group flex items-center justify-center gap-x-3 rounded-md p-1 text-sm tracking-wide leading-6"
                )}
              >
                <category.icon size={18} />
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full">
          <li>
            {medias.map((media) => (
              <a
                href={media.link}
                key={media.id}
                className={classNames(
                  `${commonClasses2}`,
                  "group flex items-center justify-center gap-x-3 rounded-md p-1 px-2 text-sm tracking-wide leading-6"
                )}
              >
                <media.icon size={18} />
              </a>
            ))}
          </li>
        </ul>
      </aside>
      <aside
        className={`${commonClasses} flex flex-col justify-between z-10 w-56 shadow-md shadow-neutral-300 dark:shadow-neutral-800 lg:sticky absolute top-0 p-2 gap-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${
          isSmallOpen
            ? "flex h-full bg-neutral-50 dark:bg-neutral-950 max-h-screen pt-20"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 w-full">
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
            >
              <p
                className={classNames(
                  category.name === selectedCategory
                    ? `${commonClasses1}`
                    : `${commonClasses2}`,
                  "group flex items-center gap-x-3 rounded-md p-1 px-2 text-sm tracking-wide leading-6"
                )}
              >
                <category.icon size={18} />
                {category.name}
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 w-full">
          <li>
            {medias.map((media) => (
              <a
                href={media.link}
                key={media.id}
                className={classNames(
                  `${commonClasses2}`,
                  "group flex items-center gap-x-3 rounded-md p-1 px-2 text-sm tracking-wide leading-6"
                )}
              >
                <media.icon size={18} />
                {media.name}
              </a>
            ))}
          </li>
        </ul>
      </aside>
    </>
  );
}
