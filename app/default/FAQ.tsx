"use client"

import React, { useState } from "react";
import { FAQ } from "@/app/constants/data";
import Image from 'next/image'

export default function Faq(){
    const [openIndex, setOpenIndex] = useState(null)

    const handleClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    return(
        <section className="max-w-screen-md mx-auto px-[1rem] py-[7rem] max-[600px]:py-[2rem]">
            <div className="flexCol gap-3 items-center">
                <Image className="p-3 bg-zinc-300 rounded-full w-[50px]" src={'/circle-question.svg'} width={40} height={40} alt="questions" />
                <h1 className="textHeading">Popular Questions</h1>
            </div>
            <div className="grid gap-3 cursor-pointer">
            {FAQ.map((list, index) => (
                <div className={'bg-white hover:bg-zinc-100 rounded-lg p-5 transition-all ease-linear '} key={index} 

                onClick={() => handleClick(index)}>
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
                    src={openIndex === index ? '/chevron-up.svg' : '/chevron-down.svg'}
                    width={16}
                    height={16}
                    alt="chevron"
                    />
                </div>
                {/* desc */}
                <div className={openIndex === index ? 'pt-[1rem]' : 'hidden'}>
                    <p>{list.answer}</p>
                </div>
                </div>
            ))}
            </div>
        </section>
    )
}