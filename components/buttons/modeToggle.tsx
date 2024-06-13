'use client'

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        <>
        <div>
            <Button variant='mode' onClick={() => setTheme('light')}> <Sun className="h-[1.2rem] w-[1.2rem]" /></Button>
            <Button variant='mode' onClick={() => setTheme('dark')}> <Moon className="h-[1.2rem] w-[1.2rem]" /></Button>
        </div>
        {/*<DropdownMenu>*/}
        {/*    <DropdownMenuTrigger asChild>*/}
        {/*        <Button variant="outline" size="icon">*/}
        {/*            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />*/}
        {/*            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />*/}
        {/*            <span className="sr-only">Toggle theme</span>*/}
        {/*        </Button>*/}
        {/*    </DropdownMenuTrigger>*/}
        {/*    <DropdownMenuContent align="end">*/}
        {/*        <DropdownMenuItem onClick={() => setTheme(Theme.LIGHT)}>*/}
        {/*            Light*/}
        {/*        </DropdownMenuItem>*/}
        {/*        <DropdownMenuItem onClick={() => setTheme(Theme.DARK)}>*/}
        {/*            Dark*/}
        {/*        </DropdownMenuItem>*/}
        {/*        <DropdownMenuItem onClick={() => setTheme(Theme.SYSTEM)}>*/}
        {/*            System*/}
        {/*        </DropdownMenuItem>*/}
        {/*    </DropdownMenuContent>*/}
        {/*</DropdownMenu>*/}
        </>
    );
}