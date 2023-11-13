import {package1} from '@/app/constants/price'
import { createDeflate } from 'zlib'
import React from 'react';

const PriceCard: React.FC = () =>{
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem]">
            <h1 className='textHeading'>Pricecard</h1>
            <div className='grid grid-cols-3 max-[600px]:grid-cols-1 gap-3'>
                {package1.map((card, index) => (
                    <div key={index} className="bg-white p-8 rounded-xl border border-zinc-300">
                        <h2 className='font-bold text-center text-2xl'>{card.name}</h2>
                        <div className=' flex flex-col items-center text-center'>
                            <span>{card.basicprice}</span>
                            <span className='w-full rounded-xl p-2 bg-zinc-100 text-3xl font-bold'>{card.promoprice}</span>
                        </div>
                        <p className='text-center'>{card.desc}</p>
                        <ul className='grid gap-3'>
                            {card.package.map((item, itemIndex) => (
                                <li className='text-center' key={itemIndex}>{item.item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default PriceCard