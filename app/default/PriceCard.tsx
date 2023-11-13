import {package1} from '@/app/constants/price'
import Image from '@/node_modules/next/image';
import { createDeflate } from 'zlib'
import React from 'react';

const PriceCard: React.FC = () =>{
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem]">
            <h1 className='textHeading'>Pricecard</h1>
            <div className='grid grid-cols-3 max-[600px]:grid-cols-1 gap-3'>
                {package1.map((card, index) => (
                    <div style={card.transform} key={index} className="bg-white p-8 rounded-[5%] border border-zinc-300">
                        <h2 style={card.theme} className='min-w-fit font-medium mx-auto text-center text-1xl py-1 px-3 rounded-full '>{card.name}</h2>
                        <p className='text-center'>{card.desc}</p>
                        <div className=' flex flex-col items-center text-center py-[1rem]'>
                            <p className='text-3xl'>Rp <span className='font-bold'>{card.promoprice}</span></p>
                            <span className='line-through'>{card.basicprice}</span>
                        </div>
                        <ul className='grid gap-3'>
                            {card.package.map((item, itemIndex) => (
                                <li className='text-center flexCenter gap-2 font-medium' key={itemIndex}>
                                    <Image className='' src={'/check.svg'} width={18} height={18} alt="checklist"/>
                                    <span>{item.item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className='w-full rounded-xl p-2 bg-zinc-950 text-white mt-[2rem]'>Get Started</button>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PriceCard