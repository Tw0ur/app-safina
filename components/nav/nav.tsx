"use client";

import { Home, ChevronDown, LogOut, ArrowRightLeft } from "lucide-react";
import { useState, useRef } from "react";
import { ModeToggle } from "../buttons/modeToggle";

const navItems = [
  {
    name: "Главная",
    icon: Home,
    dropdownItem: [],
  },
  {
    name: "Операции",
    icon: ArrowRightLeft,
    dropdownItem: [
      "Создать кошелек",
      "Сделать перевод",
      "Купить криптовалюту",
      "Обменять токены",
    ],
  },
  {
    name: "Активы",
    icon: Home,
    dropdownItem: ["Все кошельки", "Истории транзакции"],
  },
  {
    name: "Настройки",
    icon: Home,
    dropdownItem: [],
  },
];

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (index) => {
    clearTimeout(timeoutRef.current);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex(-1);
    }, 50); // Adjust the delay as needed
  };

  return (
    <>
      {/* For larger screens and over */}
      <nav className="hidden lg:flex justify-around items-center py-2 shadow-md dark:border dark:border-b-gray-600">
        <ul className="w-full flex flex-1 justify-around items-start">
          {navItems.map((item, ind) => {
            const { icon: Icon } = item;
            return (
              <li
                key={ind}
                className="relative flex flex-col items-center"
                onMouseEnter={() => handleMouseEnter(ind)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-x-1"
                >
                  <Icon />
                  <p>{item.name}</p>
                  {item.dropdownItem.length !== 0 && (
                    <ChevronDown
                      className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${
                        activeIndex === ind ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  )}
                </a>
                {item.dropdownItem.length > 0 && (
                  <ul
                    className={`absolute z-[1000] top-full mt-2 flex flex-col border shadow-md transition duration-200 bg-white dark:bg-gray-800 ${
                      activeIndex === ind ? "block" : "hidden"
                    }`}
                    onMouseEnter={() => handleMouseEnter(ind)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdownItem.map((dropdownItem, dropdownInd) => (
                      <li
                        key={dropdownInd}
                        className="text-center px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-500"
                      >
                        <a href="#" className="block">
                          {dropdownItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-x-4 px-6">
          <ModeToggle />
          <a href="#" className="flex justify-center items-center gap-2">
            <LogOut />
            <p className="text-red-500">Выйти</p>
          </a>
        </ul>
      </nav>
      {/* For smaller screens */}
      <nav className="flex lg:hidden justify-between items-center px-2 py-2 shadow-md dark:border dark:border-b-gray-600"></nav>
    </>
  );
};

export default Nav;
