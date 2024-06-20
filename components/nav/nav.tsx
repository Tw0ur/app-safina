"use client";

import {
  Home,
  ChevronDown,
  LogOut,
  ArrowRightLeft,
  X,
  Wallet,
  Settings,
} from "lucide-react";
import { useState, useRef } from "react";
import Image from "next/image";
import { ModeToggle } from "../buttons/modeToggle";

const navItems = [
  {
    name: "Главная",
    link: "/",
    icon: Home,
    dropdownItem: [],
  },
  {
    name: "Операции",
    link: "/operations",
    icon: ArrowRightLeft,
    dropdownItem: [
      { name: "Создать кошелек", link: "wallet" },
      { name: "Сделать перевод", link: "transaction" },
      { name: "Купить криптовалюту", link: "buy_crypto" },
      { name: "Обменять токены", link: "trade_token" },
    ],
  },
  {
    name: "Активы",
    icon: Wallet,
    dropdownItem: [
      { name: "Все кошельки", link: "all_wallets" },
      { name: "Истории транзакции", link: "transaction_history" },
    ],
  },
  {
    name: "Настройки",
    icon: Settings,
    dropdownItem: [],
  },
];

export const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* For larger screens and over */}
      {/* Problem with making this position:fixed, because the z-index is bugging out */}
      {/* TODO: FIX "FIXED POSITION" AND Z-INDEX */}
      <nav className="hidden lg:flex w-full justify-around items-center py-2 shadow-md dark:border dark:border-b-gray-600">
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
                  href={item.link}
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
                    className={`absolute z-[1000] top-full mt-4 flex flex-col border shadow-md transition duration-200 bg-white dark:bg-gray-800 ${
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
                        <a href={dropdownItem["link"]} className="block">
                          {dropdownItem["name"]}
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
      <nav className="w-full flex lg:hidden justify-between items-center px-2 py-2 shadow-md dark:border">
        <div className="relative w-32 h-8 ml-4">
          <Image
            src="/apiSafinaLogo.svg"
            alt="Safina logo"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <button onClick={toggleMenu} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div
            className={`fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-black z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4">
              <div className="relative w-32 h-8 ml-4">
                <Image
                  src="/apiSafinaLogo.svg"
                  alt="Safina logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <button onClick={toggleMenu} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col p-4 ml-4 gap-2">
              {navItems.map((item, ind) => {
                const { icon: Icon } = item;
                return (
                  <div key={ind} className="mb-4">
                    <a
                      href="#"
                      className="flex justify-between items-center"
                      onClick={() => {
                        activeIndex === ind
                          ? setActiveIndex(-1)
                          : setActiveIndex(ind);
                      }}
                    >
                      <div className="flex items-center gap-x-2">
                        <Icon />
                        <p>{item.name}</p>
                      </div>
                      {item.dropdownItem.length !== 0 && (
                        <ChevronDown
                          className={`h-4 w-4 transition duration-200 ${
                            activeIndex === ind ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                    {item.dropdownItem.length > 0 && activeIndex === ind && (
                      <ul className="mt-2 flex flex-col text-sm">
                        {item.dropdownItem.map((dropdownItem, dropdownInd) => (
                          <li
                            key={dropdownInd}
                            className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-800"
                          >
                            <a href={dropdownItem["link"]} className="block">
                              {dropdownItem["name"]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
              <div className="flex flex-col gap-2">
                <ModeToggle />
                <a href="#" className="flex items-center gap-x-2 text-red-500">
                  <LogOut />
                  <p>Выйти</p>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
