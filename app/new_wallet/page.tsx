import PriceCrypto from "@/components/priceCrypto/priceCrypto";

const NewWallet = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-[70vw] '>
                <h1 className='my-2 text-3xl'>Создать кошелек</h1>
                <hr className='h-2'/>
            </div>
            <PriceCrypto/>
            <form action="">
                <div>
                    <div>

                    </div>
                    <span className='text-sm text-muted-foreground '>Выберите тип сети для вашего кошелька</span>
                </div>
                <div>

                </div>
            </form>

        </div>
    );
};

export default NewWallet;
