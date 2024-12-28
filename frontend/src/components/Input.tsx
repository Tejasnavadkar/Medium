import { ChangeEvent } from "react"

type InputProps = {
    lable:string,
    placeholder:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=> void,
    type?:string
}

export const Input = ({ lable, placeholder,onChange,type }:InputProps) => {
    return <>
        <div className="flex flex-col gap-1 ">
            <div className="font-semibold">{lable}</div>
            <div>
                <input type={type || "text"} onChange={onChange} className="w-full border py-1 rounded-md border-gray-300 px-4" placeholder={`${placeholder}`} />
            </div>
        </div>
    </>
}