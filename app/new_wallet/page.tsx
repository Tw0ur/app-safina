'use client'
import { useState } from "react";
import { z } from "zod";
import { walletSchema } from "@/schemas/walletSchema";
import { INetwork } from "@/service/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const NewWallet = () => {
    const [network, setNetwork] = useState<string>('');
    const [subscribers, setSubscribers] = useState<string[]>(['']);
    const [minSubscribers, setMinSubscribers] = useState(1);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleInputChange = (index: number, value: string) => {
        const newSubscribers = [...subscribers];
        newSubscribers[index] = value;
        setSubscribers(newSubscribers);
    };

    const handleAddSubscriber = () => {
        setSubscribers([...subscribers, '']);
    };

    const handleRemoveSubscriber = () => {
        if (subscribers.length > 1) {
            setSubscribers(subscribers.slice(0, -1));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = {
            walletName: (e.target as any).walletName.value,
            network,
            subscribers,
            minSubscribers,
        };

        try {
            walletSchema.parse(formData);
            console.log("Validation successful", formData);
            // Submit the form or do something with the valid data
        } catch (e) {
            if (e instanceof z.ZodError) {
                const fieldErrors: Record<string, string> = {};
                e.errors.forEach(error => {
                    fieldErrors[error.path.join('.')] = error.message;
                });
                setErrors(fieldErrors);
            }
            console.error("Validation error", e.errors);
        }
    };

    return (
        <div className='max-w-[60vw] mx-auto h-full flex flex-col justify-center items-center'>
            <div className='w-full '>
                <h1 className='my-6 text-center text-3xl sm:text-left'>Создать кошелек</h1>
                <hr className='h-2'/>
            </div>
            {/*<PriceCrypto/>*/}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 my-10 text-base sm:text-lg">
                <div className='w-4/5 md:w-3/5 mx-auto'>
                    <label>Название кошелька</label>
                    <Input type='text' id="walletName" name="walletName"/>
                    {errors.walletName && <p className='text-sm text-error'>{errors.walletName}</p>}
                </div>
                <div>
                    <div className='flex flex-col gap-2 w-4/5 md:w-3/5 mx-auto'>
                        <div className='flex gap-2 w-full flex-col sm:flex-row'>
                            <div className='flex-1'>
                                <Button
                                    className={`w-full h-full text-base md:text-lg ${network === INetwork.Ethereum && 'bg-main text-background'}`}
                                    variant={'mainActive'} onClick={(e) => {
                                    e.preventDefault();
                                    setNetwork(INetwork.Ethereum);
                                }}>
                                    Ethereum
                                </Button>
                            </div>
                            <div className='flex-1'>
                                <Button
                                    className={`w-full h-full text-base md:text-lg ${network === INetwork.Tron && 'bg-main text-background'}`}
                                    variant={'mainActive'} onClick={(e) => {
                                    e.preventDefault();
                                    setNetwork(INetwork.Tron);
                                }}>
                                    Tron
                                </Button>
                            </div>
                        </div>
                        <span className={`text-sm text-muted-foreground text-center ${errors.network && ' text-[var(--error)] '}` }>Выберите тип сети для вашего кошелька</span>
                    </div>
                </div>
                <div className='w-4/5 md:w-3/5 mx-auto'>
                    <label>Добавить подписанта</label>
                    {subscribers.map((subscriber, index) => (
                        <div key={index} className='flex gap-2 mt-2 flex-col'>
                            <Input
                                type='text'
                                value={subscriber}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                placeholder={`${index + 1}. Email подписанта `}
                            />
                            {errors[`subscribers.${index}`] && <p className='text-sm text-error'>{errors[`subscribers.${index}`]}</p>}
                        </div>
                    ))}
                    <div className='flex gap-4 mt-4 justify-between px-10 flex-wrap md:gap-10'>
                        <Button className='flex-1' onClick={(e) => {
                            e.preventDefault();
                            handleAddSubscriber();
                        }}>
                            Добавить
                        </Button>
                        <Button className='flex-1 ' onClick={(e) => {
                            e.preventDefault();
                            handleRemoveSubscriber();
                        }}>
                            Удалить последнего
                        </Button>
                    </div>

                    {subscribers.length > 1 &&
                        <div className='flex w-full  flex-col'>
                            <div className='flex gap-3 justify-center mt-8 items-center w-full'>
                                <span>1</span>
                                <Slider
                                    defaultValue={[1]}
                                    max={subscribers.length}
                                    min={1}
                                    step={1}
                                    className={'w-3/5'}
                                    onValueChange={(value) => setMinSubscribers(value[0])}
                                />
                                <span>{subscribers.length}</span>
                            </div>
                            <div className='text-center mt-1'>
                                Минимальное количество подписантов
                            </div>
                            {errors.minSubscribers && <p>{errors.minSubscribers}</p>}
                        </div>
                    }
                </div>
                <Button variant='main' className='w-3/5 mx-auto md:w-2/5 md:text-lg md:h-12' type="submit">Создать кошелек</Button>
            </form>
        </div>
    );
};

export default NewWallet;
