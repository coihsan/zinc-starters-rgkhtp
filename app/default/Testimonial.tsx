import {testimonial} from '@/app/constants/data'
import Image from '@/node_modules/next/image'
export default function Testimoni(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] ">
            <h1 className='textHeading'>Testimoni</h1>
            <div className='w-full grid grid-cols-3 gap-3 max-[600px]:flex max-[600px]:overflow-scroll'>
            {testimonial.map((person) =>(
            <div className='flex flex-col items-center gap-3 bg-zinc-50 rounded-md border border-zinc-300 p-9 max-[600px]:flex-1 max-[600px]:min-w-full'>
                <Image src={person.picture} width={40} height={40} alt="user"/>
                <span className='text-center'>{person.message}</span>
                <h3 className='font-bold text-center'>{person.name}</h3>
            </div>
            ))}
            </div>
        </section>
    )
}