import {getWalletByParams} from "@/service/wallet";
import {getUser} from "@/service/user";
import {IWallet} from "@/types/types";
import Subscribe from "@/components/subscribe/subscribe";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import TransactionList from "@/components/tables/transactionList";
import Image from "next/image";
import svg from "@/public/ethereum-eth-logo.svg"
interface WalletAddressProps {
    params: {
        wallet_address: string;
    }
}

const Wallet = async ({params: {wallet_address}}: WalletAddressProps) => {
    const priceEtherium = 3562.48

    const user = getUser()
    const wallet: IWallet | undefined = await getWalletByParams(wallet_address, user!.email)
    return (
        <div className='max-w-[60vw] mx-auto'>
            <div className='w-full '>
                <h1 className='my-7 text-3xl'>Кошелек: {wallet?.name}</h1>
                <hr/>
            </div>
            <div className='my-16 text-sm flex flex-col gap-2 sm:text-base'>
                <div className='truncate text-wrap'>
                    Адрес кошелька: <span className='font-semibold text-main  '>{wallet?.address}</span>
                </div>
                <div className='truncate text-wrap'>
                    Идентификатор кошелька: <span className='font-semibold'>{wallet?.wallet_id} </span>
                </div>
                <div>
                    Сеть: <span className='font-semibold'>{wallet?.network} ({wallet?.token})</span>
                </div>
                <div>
                    Баланс: <span className='font-semibold'>{wallet?.balance as number * priceEtherium}$</span>
                </div>
                <div className='text-balance'>
                    Минимальное количество подписантов:<span className='font-semibold'> {wallet?.min_subscribe}</span>
                </div>
                <div className='flex flex-wrap gap-2 items-center'>
                    Подписанты:
                    {
                        wallet?.subscribe && wallet.subscribe.map(subscribe => <Subscribe key={subscribe.subscriber_id}
                                                                                          subscribe={subscribe}/>)
                    }
                </div>
            </div>
            <div className='w-full rounded-lg border border-foreground dark:border-muted h-full'>
                <div className='my-10 flex flex-col items-center gap-4'>
                    <h3 className='text-3xl flex gap-2 items-center'>
                        Токен: <Image src={svg} alt='' width='15' height='15'/> {wallet?.token}
                    </h3>
                    <div>
                        Баланс: {wallet?.balance} {wallet?.token}
                    </div>
                    <div className='flex flex-col items-center gap-2 sm:flex-row '>
                        <Link href='/'>
                            <Button variant='main'>Пополнить</Button>
                        </Link>
                        <Link href='/transaction'><Button variant='main'>Вывести</Button></Link>
                        <Link href='/buy_crypto'><Button>Купить</Button></Link>
                    </div>

                </div>
                <div className='w-4/5 mb-20 mx-auto sm:mb-0'>
                    <TransactionList wallet={wallet}/>
                </div>
            </div>

        </div>
    );
};

export default Wallet;

