'use client'

import {usePathname} from "next/navigation";
import {IMenuLink} from "@/types/types";

const MenuLink = ({item}: IMenuLink) => {
    const pathname = usePathname()
    return (
        <div className='flex h-full items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600'>
            <div className={`px-5 py-2 flex flex-col items-center text-xs ${pathname === item.href && 'underline'}`}>
                {item.svg}
                <span>{item.label}</span>
            </div>
        </div>
    );
};

export default MenuLink;
