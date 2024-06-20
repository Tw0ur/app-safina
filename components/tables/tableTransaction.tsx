import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ITransaction, IWallet} from "@/types/types";


interface ITableTransaction {
    bool?:boolean
    transaction: ITransaction[]
}

const TableTransaction = ({transaction , bool} : ITableTransaction) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {bool && <TableHead className="w-[200px]">Имя кошелька</TableHead>}
                    <TableHead className='w-[300px]'>Адрес получателя</TableHead>
                    <TableHead>Хэш</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Количество</TableHead>
                    <TableHead colSpan={2}>Назначение платеха</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                        <TableRow >
                            {transaction.map((tx: ITransaction) =>(
                                <>
                                <TableCell className="font-medium max-w-[300px] text-ellipsis ">{tx.recipient.address}</TableCell>
                                <TableCell>{tx.transaction_hash}</TableCell>
                                <TableCell>{tx.timestamp.toLocaleString()}</TableCell>
                                <TableCell>{tx.amount}</TableCell>
                                <TableCell className="text-right" colSpan={2}>{tx.description}</TableCell>
                                </>
                            ))}

                        </TableRow>
            </TableBody>
        </Table>
    );
};

export default TableTransaction;
