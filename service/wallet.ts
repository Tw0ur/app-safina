

import {wallets} from "@/service/data";

export const getWalletByParams =  (params: string , user_email:string) => {
    const data =  wallets.find(e => e.wallet_id === params && e.user_email === user_email)
    return data
}