import Link from "next/link";

export function Menu() {
    return (
        <div className='flex gap-20'>
            <div>
                <Link href='#'>
                    <div>
                       <span>Кошельки</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link href='#'>
                    <div>
                        <span>Кошельки</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link href='#'>
                    <div>
                        <span>Кошельки</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link href='#'>
                    <div>
                        <span>Кошельки</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link href='#'>
                    <div>
                        <span>Кошельки</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
