import {ITransaction, ITypeTransaction, IUsers, IWallet} from "@/types/types";

export enum INetwork {
    Ethereum = 'Ethereum',
    Tron = 'Tron'
}
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
                name: 'Twour1',
                address: 'J4b9n74z6fa3pQVsoz7nk6PoSZc9oawhu',
                network: 'Ethereum',
                token: 'ETH',
                balance: 5,
                subscribe: [
                    {
                        subscriber_id: 1,
                        subscriber_email: 'alice.johnson@example.com'
                    },
                    {
                        subscriber_id: 2,
                        subscriber_email: 'alice.johnson.105@example.com'
                    }
                ],
                min_subscribe: 1,
                tx_history: []
            }
        ],

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
                name: 'Twour',
                address: '0x1234567890123456789012345678901',
                network: 'Ethereum',
                token: 'ETH',
                balance: 10,
                subscribe: [{
                    subscriber_id: 1,
                    subscriber_email: 'bob.smith@example.com'
                }],
                min_subscribe: 1,
                tx_history: []

            },
        ],

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
                name: 'Twour',
                address: '0x0987654321098765432109876543210987654321',
                network: 'Ethereum',
                token: 'ETH',
                balance: 20,
                subscribe: [{
                    subscriber_id: 1,
                    subscriber_email: 'charlie.brown@example.com'
                }],
                min_subscribe: 2,
                tx_history: []
            }
        ],

    }
];

export const wallets: IWallet[] = [
    {
        wallet_id: '098765432109876543210987',
        name: 'Twour',
        user_email: 'charlie.brown@example.com',
        address: '0x0987654321098765432109876543210987654321',
        network: 'Ethereum',
        token: 'ETH',
        balance: 20,
        subscribe: [{
            subscriber_id: 1,
            subscriber_email: 'charlie.brown@example.com'
        }],
        min_subscribe: 2,
        tx_history: []

    },
    {
        wallet_id: '123456789012345678901234',
        name: 'Twour',
        user_email: 'bob.smith@example.com',
        address: '0x1234567890123456789012345678901234567890',
        network: 'Ethereum',
        token: 'ETH',
        balance: 10,
        subscribe: [{
            subscriber_id: 1,
            subscriber_email: 'bob.smith@example.com'
        }],
        min_subscribe: 1,
        tx_history: []

    },
    {
        wallet_id: 'abcd1234abcd1234abcd1234',
        name: 'Twour1',
        user_email: 'alice.johnson@example.com',
        address: 'J4b9n74z6fa3pQVsoz7nk6PoSZc9oawhu',
        network: 'Ethereum',
        token: 'ETH',
        balance: 5,
        subscribe: [
            {
                subscriber_id: 1,
                subscriber_email: 'alice.johnson@example.com'
            },
            {
                subscriber_id: 2,
                subscriber_email: 'alice.johnson.105@example.com'
            }
        ],
        min_subscribe: 1,
        tx_history: [
            {
                user_id: 1,
                user_email: 'alice.johnson@example.com',
                action: ITypeTransaction.send,
                wallet: users[0].wallet[0],
                transaction_id: 301,
                transaction_hash: 'Payment to Bob',
                timestamp: new Date('2023-06-15T12:00:00Z'),
                description: 'Payment for graphic design services',
                amount: 2,
                token: 'ETH',
                recipient: users[1].wallet[0]
            },
            {
                user_id: 1,
                user_email: 'alice.johnson@example.com',
                action: ITypeTransaction.received,
                wallet: users[0].wallet[0],
                transaction_id: 304,
                transaction_hash: 'Payment to Alice',
                timestamp: new Date('2023-06-17T16:00:00Z'),
                description: 'Payment for software development',
                amount: 1.5,
                token: 'ETH',
                recipient: users[2].wallet[0]
            },
        ]
    }

]
export const transactions: ITransaction[] = [
    {
        user_id: 1,
        user_email: 'alice.johnson@example.com',
        action: ITypeTransaction.send,
        wallet: users[0].wallet[0],
        transaction_id: 301,
        transaction_hash: 'Payment to Bob',
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
        transaction_hash: 'Received to Alice',
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
        transaction_hash: 'Payment to Alice',
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
        transaction_hash: 'Payment to Alice',
        timestamp: new Date('2023-06-17T16:00:00Z'),
        description: 'Payment for software development',
        amount: 1.5,
        token: 'ETH',
        recipient: users[2].wallet[0]
    },
];
