'use client'

import {useState} from "react";
import {ISubscribe} from "@/types/types";

const Subscribe = ({subscribe} : {subscribe: ISubscribe[]}) => {
    const [hiddenSubscribe, setHiddenSubscribe] = useState<boolean>(true)
    return (
            <div>
                Подписанты: {subscribe && subscribe.map(e => <span onClick={() => setHiddenSubscribe(!hiddenSubscribe)} className={`${hiddenSubscribe ? 'bg-muted text-muted select-none' : 'bg-background'}`} key={e.subscriber_id}>{e.subscriber_email}</span>)}
            </div>
    );
};

export default Subscribe;
