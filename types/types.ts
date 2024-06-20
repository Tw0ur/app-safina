export enum ITypeTransaction {
    received = 'received',
    send = 'send',
    deduce = 'deduce'
}
export interface IMenuLink {
    item: {
        href: string;
        label: string;
        svg: JSX.Element;
    }
}

export interface IUsers {
    id: number;
    name: string;
    email: string,
    password: string,
    created_at: Date,
    wallet: IWallet[] | [];
    // tx_history: ITransaction[] | [];
}

export interface IWallet {
    user_id?:number
    user_email?:string;
    name: string;
    wallet_id: string;
    address:string;
    network:string;
    token:string;
    balance: number;
    subscribe: ISubscribe[];
    min_subscribe: number;
    tx_history: ITransaction[] | [];
}

export interface ITransaction {
    user_id:number;
    user_email:string;
    wallet: IWallet;
    action: ITypeTransaction
    transaction_id: number;
    transaction_hash: string;
    timestamp: Date;
    description: string;
    amount: number;
    token:string;
    recipient: IWallet;
}
export interface ISubscribe {
    subscriber_id: number;
    subscriber_email: string;
}

