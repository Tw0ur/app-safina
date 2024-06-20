'use client'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import TableTransaction from "@/components/tables/tableTransaction";
import {ITransaction, ITypeTransaction, IWallet} from "@/types/types";
import {ChangeEvent, useEffect, useState} from "react";
import {InputSearch} from "@/components/inputs/searchInput";


const TransactionList = ({wallet} : {wallet?: IWallet}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredTransaction, setFilteredTransaction] = useState<ITransaction[]>(wallet?.tx_history || []);

    useEffect(() => {
        if (wallet && wallet.tx_history) {
            const filtered = wallet.tx_history.filter(tx =>
                tx.recipient.address.toLowerCase().includes(searchTerm.toLowerCase()) && tx.action === ITypeTransaction.send
            );
            setFilteredTransaction(filtered);
        }
    }, [searchTerm, wallet]);

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-2">

                <AccordionContent>
                    <div className='w-full flex justify-end pr-2'>
                        <div className='max-w-[200px] '>
                            <InputSearch onChange={handleSearchChange} value={searchTerm}/>
                        </div>
                    </div>

                    <TableTransaction transaction={filteredTransaction} />
                </AccordionContent>
                <AccordionTrigger>Развернуть историю транзакции</AccordionTrigger>
            </AccordionItem>
        </Accordion>
    );
};

export default TransactionList;
