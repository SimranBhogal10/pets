'use client';

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { Suspense, useCallback } from "react";
import { IconType } from "react-icons";

type CategoryProps={
    label: string,
    icon: IconType,
    selected?: boolean
}

const Category: React.FC<CategoryProps> = ({label, icon:Icon, selected}) =>{

    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(()=>{
        if(label === 'All'){
            router.push('/');
        }
        else{
            let currentQuery = {};
            if(params){
                currentQuery = queryString.parse(params.toString())
            }

            const updatedQuery = {
                ...currentQuery,
                category: label
            }

            const url = queryString.stringifyUrl({
                url: '/',
                query: updatedQuery
            },
            {
                skipNull: true
            }
        )

        router.push(url)
        }
    },[label, params, router])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleClick();
        }
      };

    return (
        <div onClick= {handleClick} className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-indigo-800 transition cursor-pointer ${selected ? 'border-b-indigo-800 text-indigo-800': 'border-transparent text-slate-500'}`} onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-pressed={selected}>
            <Icon size={20}/>
            <div className="font-medium text-md">{label}</div>
        </div>
    )
}

export default Category;