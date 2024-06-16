import {getWalletByParams} from "@/service/wallet";
import {getUser} from "@/service/user";
import {IBalance, IWallet} from "@/types/types";
import Subscribe from "@/components/subscribe/subscribe";

interface WalletAddressProps {
    params: {
        wallet_address: string;
    }
}

const Wallet = async ({params: {wallet_address}}: WalletAddressProps) => {
    const user = getUser()
    const wallet: IWallet | undefined = await getWalletByParams(wallet_address, user!.email)
    return (
        <div>
            <div>
                Имя кошелька: {wallet?.name}
            </div>
            <div>
                Адрес кошелька: {wallet?.address}
            </div>
            <div>
                Идентификатор кошелька: {wallet?.wallet_id}
            </div>
            <div>
                Сеть: {wallet?.network} ({wallet?.token})
            </div>

            {wallet?.balance && wallet.balance.map((e: IBalance) => {
                if (e.token === wallet.token) {
                    return (
                        <div key={e.balance_id}>
                            Баланс: {e.amount} {e.token}
                        </div>
                    )
                }
            })}
            <div>
                Минимальное количество подписантов: {wallet?.min_subscribe}
            </div>
            {
                wallet?.subscribe && <Subscribe subscribe={wallet.subscribe}/>
            }

        </div>
    );
};

export default Wallet;

