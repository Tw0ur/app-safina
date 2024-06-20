'use client'
import { useState, useEffect, ChangeEvent } from 'react';
import { TableWallets } from "@/components/tables/tableWallets";
import { InputSearch } from "@/components/inputs/searchInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IUsers, IWallet } from "@/types/types";
import { getUser } from "@/service/user";

const Wallets = () => {
    const user: IUsers | undefined = getUser();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredWallets, setFilteredWallets] = useState<IWallet[]>(user?.wallet || []);

    useEffect(() => {
        if (user?.wallet) {
            const filtered = user.wallet.filter(wallet =>
                wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredWallets(filtered);
        }
    }, [searchTerm, user?.wallet]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='md:max-w-[52rem] w-[80vw] mx-auto my-16'>
            <h2 className='text-center text-3xl sm:text-left'>Все кошельки</h2>
            <div className='flex-col gap-7 items-center flex justify-evenly my-10 sm:flex-row'>
                <InputSearch value={searchTerm} onChange={handleSearchChange} />
                <Link href='/new_wallet'><Button>Создать кошелек</Button></Link>
                <Link href='/transaction'><Button>Сделать перевод</Button></Link>
            </div>
            <div>
                {user?.wallet && <TableWallets bool={true} wallet={filteredWallets} />}
            </div>
        </div>
    );
};

export default Wallets;
