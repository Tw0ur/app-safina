import {ITransaction, ITypeTransaction, IUsers, IWallet} from "@/types/types";

export const users: IUsers[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'alicepassword123',
        created_at: new Date('2023-01-01T10:00:00Z'),
        wallet: [
            {
                wallet_id: 'abcd1234abcd1234abcd1234',
                name:'Twour1',
                address: '0xabcdefabcdefabcdefabcdefabcdefabcdef',
                network: 'Ethereum',
                token: 'ETH',
                balance: [
                    {
                        balance_id: 1,
                        amount: 5,
                        token: 'ETH'
                    }
                ],
                subscribe: [
                    {
                        subscriber_id:1,
                        subscriber_email: 'alice.johnson@example.com'
                    }
                ],
                min_subscribe: 1,
            }
        ],
        tx_history: []
    },
    {
        id: 2,
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        password: 'bobpassword456',
        created_at: new Date('2023-02-15T12:30:00Z'),
        wallet: [
            {
                wallet_id: '123456789012345678901234',
                name:'Twour',
                address: '0x1234567890123456789012345678901234567890',
                network: 'Ethereum',
                token: 'ETH',
                balance: [
                    {
                        balance_id: 2,
                        amount: 10,
                        token: 'ETH'
                    }
                ],
                subscribe: [{
                    subscriber_id:1,
                    subscriber_email: 'bob.smith@example.com'
                }],
                min_subscribe: 1,

            },
        ],
        tx_history: []
    },
    {
        id: 3,
        name: 'Charlie Brown',
        email: 'charlie.brown@example.com',
        password: 'charliepassword789',
        created_at: new Date('2023-03-20T08:45:00Z'),
        wallet: [
            {
                wallet_id: '098765432109876543210987',
                name:'Twour',
                address: '0x0987654321098765432109876543210987654321',
                network: 'Ethereum',
                token: 'ETH',
                balance: [
                    {
                        balance_id: 3,
                        amount: 20,
                        token: 'ETH'
                    }
                ],
                subscribe: [{
                    subscriber_id:1,
                    subscriber_email: 'charlie.brown@example.com'
                }],
                min_subscribe: 2,

            }
        ],
        tx_history: []
    }
];

export const wallets :IWallet[] = [
    {
        wallet_id: '098765432109876543210987',
        name:'Twour',
        user_email: 'charlie.brown@example.com',
        address: '0x0987654321098765432109876543210987654321',
        network: 'Ethereum',
        token: 'ETH',
        balance: [
            {
                balance_id: 3,
                amount: 20,
                token: 'ETH'
            }
        ],
        subscribe: [{
            subscriber_id:1,
            subscriber_email: 'charlie.brown@example.com'
        }],
        min_subscribe: 2,

    },
    {
        wallet_id: '123456789012345678901234',
        name:'Twour',
        user_email: 'bob.smith@example.com',
        address: '0x1234567890123456789012345678901234567890',
        network: 'Ethereum',
        token: 'ETH',
        balance: [
            {
                balance_id: 2,
                amount: 10,
                token: 'ETH'
            }
        ],
        subscribe: [{
            subscriber_id:1,
            subscriber_email: 'bob.smith@example.com'
        }],
        min_subscribe: 1,

    },
    {
        wallet_id: 'abcd1234abcd1234abcd1234',
        name:'Twour1',
        user_email: 'alice.johnson@example.com',
        address: '0xabcdefabcdefabcdefabcdefabcdefabcdef',
        network: 'Ethereum',
        token: 'ETH',
        balance: [
            {
                balance_id: 1,
                amount: 5,
                token: 'ETH'
            }
        ],
        subscribe: [{
            subscriber_id:1,
            subscriber_email: 'alice.johnson@example.com'
        }],
        min_subscribe: 1,
    }

]
export const transactions: ITransaction[] = [
    {
        user_id: 1,
        user_email: 'alice.johnson@example.com',
        action: ITypeTransaction.send,
        wallet: users[0].wallet[0],
        transaction_id: 301,
        transaction_name: 'Payment to Bob',
        timestamp: new Date('2023-06-15T12:00:00Z'),
        description: 'Payment for graphic design services',
        amount: 2,
        token: 'ETH',
        recipient: users[1].wallet[0]
    },
    {
        user_id: 2,
        user_email: 'bob.smith@example.com',
        action: ITypeTransaction.received,
        wallet: users[1].wallet[0],
        transaction_id: 302,
        transaction_name: 'Received to Alice',
        timestamp: new Date('2023-06-15T12:00:00Z'),
        description: 'Payment for graphic design services',
        amount: 2,
        token: 'ETH',
        recipient: users[0].wallet[0]
    },
    {
        user_id: 3,
        user_email: 'charlie.brown@example.com',
        action: ITypeTransaction.send,
        wallet: users[2].wallet[0],
        transaction_id: 303,
        transaction_name: 'Payment to Alice',
        timestamp: new Date('2023-06-17T16:00:00Z'),
        description: 'Payment for software development',
        amount: 1.5,
        token: 'ETH',
        recipient: users[0].wallet[0]
    },
    {
        user_id: 1,
        user_email: 'alice.johnson@example.com',
        action: ITypeTransaction.received,
        wallet: users[0].wallet[0],
        transaction_id: 304,
        transaction_name: 'Payment to Alice',
        timestamp: new Date('2023-06-17T16:00:00Z'),
        description: 'Payment for software development',
        amount: 1.5,
        token: 'ETH',
        recipient: users[2].wallet[0]
    },
];
