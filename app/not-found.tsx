import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className='h-screen w-full flex justify-center items-center flex-col gap-5'>
            <div className="text-9xl font-bold">
                Oops!
            </div>
            <div className='text-3xl'>
                404 - Страница не найдена
            </div>
            <Link href='/'><Button variant='ghost'>Вернуться на главную страницу</Button></Link>
        </div>
    )
}