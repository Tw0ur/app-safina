"use client";
import PriceCrypto from "@/components/priceCrypto/priceCrypto";
import React, { useState } from "react";
import { z } from "zod";

import {
  IWallet,
  ISubscribe,
  ITransaction,
  ITypeTransaction,
} from "@/types/types";

// Define mock wallet data
const mockWalletData: IWallet[] = [
  {
    user_id: 1,
    user_email: "test123@example.com",
    name: "test123",
    wallet_id: "wallet123",
    address: "0x1234567890abcdef1234567890abcdef12345678",
    network: "Ethereum",
    token: "ETH",
    balance: 0,
    subscribe: [
      {
        subscriber_id: 1,
        subscriber_email: "subscriber@example.com",
      },
    ],
    min_subscribe: 1,
    tx_history: [
      {
        user_id: 1,
        user_email: "test123@example.com",
        wallet: {
          user_id: 2,
          user_email: "recipient@example.com",
          name: "recipient123",
          wallet_id: "wallet456",
          address: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
          network: "Ethereum",
          token: "ETH",
          balance: 500,
          subscribe: [],
          min_subscribe: 0,
          tx_history: [],
        },
        action: ITypeTransaction.send, // "send"
        transaction_id: 12345,
        transaction_hash: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
        timestamp: new Date(),
        description: "Payment for services",
        amount: 100,
        token: "ETH",
        recipient: {
          user_id: 2,
          user_email: "recipient@example.com",
          name: "recipient123",
          wallet_id: "wallet456",
          address: "0xabcdefabcdefabcdefabcdefabcdefabcdef",
          network: "Ethereum",
          token: "ETH",
          balance: 500,
          subscribe: [],
          min_subscribe: 0,
          tx_history: [],
        },
      },
    ],
  },
];

// Define Zod schemas for form validation
const transactionSchema = z.object({
  recipientWallet: z
    .string()
    .nonempty("Адрес кошелька не должен быть пустым")
    .regex(/^0x[a-fA-F0-9]{40}$/, "Некорректный адрес кошелька"),
  amount: z
    .string()
    .nonempty("Количество не должно быть пустым")
    .regex(/^\d+(\.\d{1,2})?$/, "Количество должно быть в формате 0,00"),
  description: z.string().nonempty("Назначение платежа не должно быть пустым"),
});

const Transaction = () => {
  const [selectedWallet, setSelectedWallet] = useState<IWallet | null>(null);
  const [formData, setFormData] = useState({
    recipientWallet: "",
    amount: "",
    description: "",
  });
  const [errors, setErrors] = useState<any>({});

  const handleWalletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const wallet = mockWalletData.find(
      (wallet) => wallet.name === event.target.value
    );
    setSelectedWallet(wallet || null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const validationResult = transactionSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: any = {};
      validationResult.error.errors.forEach((error) => {
        fieldErrors[error.path[0]] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    // Handle form submission
    console.log("Form data:", formData);
  };

  return (
    <div className="container py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl lg:text-3xl font-serif font-extralight">
          Сделать перевод
        </h1>
        <hr />
        <div className="flex justify-center">
          <PriceCrypto />
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <select
              name="wallet"
              id="wallet"
              onChange={handleWalletChange}
              className="p-2 border border-gray-400"
            >
              <option value="" disabled selected>
                Выберите кошелек
              </option>
              {mockWalletData.map((wallet, ind) => (
                <option value={wallet.name} key={ind}>
                  {wallet.name} - {wallet.token} | Баланс: {wallet.balance}
                </option>
              ))}
            </select>
            {selectedWallet && (
              <div className="mt-4">
                <p>
                  Адрес кошелька:{" "}
                  <span className="text-red-500">{selectedWallet.address}</span>
                </p>
                <p>
                  Баланс: {selectedWallet.balance} {selectedWallet.token}
                </p>
                {selectedWallet.balance === 0 && (
                  <p className="text-[var(--error)]">
                    У вас недостаточно средств на вашем кошельке
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="recipientWallet">Отправка на кошелек</label>
            <input
              type="text"
              id="recipientWallet"
              value={formData.recipientWallet}
              onChange={handleInputChange}
              placeholder="Напишите адрес кошелька, на который будет отправлен ваш перевод."
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
            {errors.recipientWallet && (
              <p className="text-[var(--error)]">{errors.recipientWallet}</p>
            )}
            <button
              type="button"
              className="mt-2 p-2 bg-[var(--error)] text-white rounded"
            >
              Сканировать QR-код
            </button>
          </div>
          <div className="mt-4">
            <label htmlFor="amount">Количество</label>
            <input
              type="text"
              id="amount"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="Напишите количество токенов, которые вы хотите отправить. Обратите внимание, что вы можете записывать только в формате 0,00 с разделителем ',' ."
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
            {errors.amount && <p className="text-red-500">{errors.amount}</p>}
          </div>
          <div className="mt-4">
            <label htmlFor="description">Назначение платежа</label>
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Укажите цель вашего платежа. Напишите в краткой форме."
              className="w-full border border-gray-300 p-2 rounded mt-2"
            />
            {errors.description && (
              <p className="text-[var(--error)]">{errors.description}</p>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Transaction;
