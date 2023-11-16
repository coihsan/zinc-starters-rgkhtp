"use client"

import React, { useState } from "react";
import { FAQ } from "@/app/constants/data";
import Image from 'next/image'

export default function Faq(){
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const handleClick = (index: string) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    return(
        <section className="max-w-screen-md mx-auto px-[1rem] py-[7rem] max-[600px]:py-[2rem]">
            <div className="flexCol gap-3 items-center">
                <Image className="p-3 bg-cyan-900 rounded-full w-[50px]" src={'/circle-question.svg'} width={40} height={40} alt="questions" />
                <h1 className="textHeading">Popular Questions</h1>
            </div>
            <div className="grid gap-3 cursor-pointer">
            {FAQ.map((list, index) => (
                <div className={'bg-gray-900 hover:bg-gray-700 rounded-lg p-5 transition-all ease-linear '} key={index.toString()} 

                onClick={() => handleClick(index.toString())}>
                {/* header */}
                <div
                    className="flex items-center justify-between w-full cursor-pointer"
                    
                >
                    <ul className="list-disc">
                        <li className="font-medium text-[1rem] flex items-center gap-2">
                            {list.ask}
                        </li>
                    </ul>
                    <Image
                    src={openIndex === index.toString() ? '/chevron-up.svg' : '/chevron-down.svg'}
                    width={16}
                    height={16}
                    alt="chevron"
                    />
                </div>
                {/* desc */}
                <div className={openIndex === index.toString() ? 'pt-[1rem]' : 'hidden'}>
                    <p className="text-slate-300">{list.answer}</p>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}