import * as z from "zod";
import { INetwork } from "@/service/data";

export const walletSchema = z.object({
    walletName: z.string().nonempty("Название кошелька не может быть пустым"),
    network: z.enum([INetwork.Ethereum, INetwork.Tron], {
        required_error: "Выберите тип сети для вашего кошелька",
    }),
    subscribers: z
        .array(z.string().nonempty("Email подписанта не может быть пустым"))
        .nonempty("Должен быть хотя бы один подписант"),
    minSubscribers: z
        .number()
        .int()
        .min(1, "Минимальное количество подписантов должно быть не менее 1"),
}).refine((data) => data.minSubscribers <= data.subscribers.length, {
    message: "Минимальное количество подписантов не может быть больше количества подписантов",
    path: ["minSubscribers"], // This specifies the field which should display the error message
});
