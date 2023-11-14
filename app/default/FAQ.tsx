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
        <section className="max-w-screen-md mx-auto px-[1rem] py-[7rem]">
            <h1 className="textHeading">FAQ</h1>
            <div className="grid gap-3 cursor-pointer">
            {FAQ.map((list, index) => (
                <div className="bg-white rounded-lg p-5" key={index}>
                {/* header */}
                <div
                    className="flex items-center justify-between w-full cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    <h2 className="font-medium text-2xl">{list.ask}</h2>
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