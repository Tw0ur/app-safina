import { Input } from "@/components/ui/input"
import {ChangeEvent} from "react";

interface InputSearchProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function InputSearch({value, onChange}: InputSearchProps): JSX.Element {
    return <Input type="text" placeholder="Search" className='w-52' onChange={onChange} value={value} />
}