import {Button} from "@/components/ui/button";
import Link from "next/link";
import {TableWallets} from "@/components/tables/tableWallets";
import {getUser} from "@/service/user";
import {IUsers} from "@/types/types";
import React from "react";


export default async function Home() {
    const user: IUsers | undefined = getUser();
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className='my-14 opacity-0 max-w-[70vw] text-2xl sm:text-3xl md:text-5xl font-bold md:my-32 animate-lineUp delay-0 text-wrap text-center z-0'>
                Добро пожаловать в <span className='text-main'>API Safina</span>
            </h1>
            <div
                className='text-lg opacity-0 animate-lineUp delay-200 max-w-[80vw] mx-auto mb-14 sm:text-3xl md:max-w-[60vw] lg:max-w-[700px] text-center text-pretty'>
                <span>
                    Наше API SAFINA позволит Вам оперативно внедрить в систему компании функции по созданию кошелька, мультиподписи и быстрому входу в крипторынок с возможностью оплаты в криптоактивах.
                </span>
            </div>
            {user?.wallet ?
                (<div className='md:max-w-[52rem] w-[80vw] mx-auto opacity-0 animate-lineUp delay-500'>
                    <h2 className='text-2xl text-center'>Ваши кошельки</h2>
                    <div className='my-2'>
                        <TableWallets wallet={user.wallet} />
                    </div>
                </div>)
                :
                (
                    <div
                        className="opacity-0 animate-lineUp delay-500 max-w-[60vw] flex flex-col justify-center items-center">
                <span className='text-lg text-wrap text-center'>
                    Для начала работы с API SAFINA вам необходимо
                </span>
                        <Link href='/new_wallet'><Button variant='ghost'>Создать кошелек</Button></Link>
                    </div>
                )
            }
        </div>
    );
}
