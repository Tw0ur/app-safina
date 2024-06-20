'use client'

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
    const { setTheme } = useTheme();
    return (
        <div>
            <Button variant='mode' onClick={() => setTheme('light')}> <Sun className="h-[1.2rem] w-[1.2rem]" /></Button>
            <Button variant='mode' onClick={() => setTheme('dark')}> <Moon className="h-[1.2rem] w-[1.2rem]" /></Button>
        </div>

    );
}