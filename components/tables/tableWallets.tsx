import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import {IWallet} from "@/types/types";



export function TableWallets({wallet , bool=false} : {wallet:IWallet[] , bool?:boolean }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Имя кошелька</TableHead>
                    <TableHead>Сеть</TableHead>
                    {bool && (
                        <>
                        <TableHead>Адрес</TableHead>
                        <TableHead>Идентификатор</TableHead>
                        </>
                        )}
                    <TableHead className="text-right" colSpan={2}>Баланс</TableHead>

                </TableRow>
            </TableHeader>
            <TableBody>
                {wallet.map((e:IWallet) => {
                    return (
                    <TableRow key={e.wallet_id}>
                        <TableCell className="font-medium"><Link href={'/wallets/' + e.wallet_id}><span className='hover:text-main'>{e.name}</span></Link></TableCell>
                        <TableCell>{e.network}</TableCell>
                        {bool && (
                            <>
                                <TableCell>{e.address}</TableCell>
                                <TableHead>{e.wallet_id}</TableHead>
                            </>
                        )}
                        <TableCell className="text-right" colSpan={2}>{e.balance} {e.token}</TableCell>
                    </TableRow>
                )})}
            </TableBody>
        </Table>
    )
}
