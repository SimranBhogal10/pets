'use client'

import { IconType } from "react-icons";

type ButtonProps = {
    label: string,
    disabled?: boolean,
    small?:boolean,
    custom?:string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({label, disabled, small, custom, icon: Icon, onClick}) =>{
    
    const btnStyles = `disabled: opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full bg-indigo-300 flex items-center justify-center gap-2 text-black ${small ? 'text-sm font-light':'text-md font-semibold'} ${small ? 'py-1 px-2':'py-3 px-4'} ${custom ? custom : ''}`;


    return (<button onClick={onClick} disabled={disabled} className={btnStyles}>
        {Icon && <Icon size={24}/>}
        {label}
    </button>)
}

export default Button;