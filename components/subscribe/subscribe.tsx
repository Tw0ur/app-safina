'use client'

import {useState} from "react";
import {ISubscribe} from "@/types/types";

const Subscribe = ({subscribe}: { subscribe: ISubscribe }) => {
    const [hiddenSubscribe, setHiddenSubscribe] = useState<boolean>(true)
    return (
        <span onClick={() => setHiddenSubscribe(!hiddenSubscribe)}
                             className={`px-1 font-semibold py-0.5 ${hiddenSubscribe ? ' bg-muted text-muted rounded-lg' : 'bg-background'}`}
                             key={subscribe.subscriber_id}>{subscribe.subscriber_email}</span>

    );
};

export default Subscribe;
