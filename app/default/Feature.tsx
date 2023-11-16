import {feature} from '@/app/constants/data'
import Image from 'next/image'

export default function Feature(){
    return(
        <section className="w-full px-[1rem] py-[7rem] max-[600px]:py-[2rem] bg-gray-950">
            <div className='max-w-screen-xl mx-auto'>
                <h1 className="textHeading">So many more features…</h1>
            <div className="w-full grid grid-cols-3 gap-3 max-[600px]:grid-cols-1">
                {feature.map((feature) =>(
                    <div key={feature.id} className="px-5 py-7 rounded-lg border border-gray-700/30 transition-all ease-linear hover:border-cyan-500 bg-gradient-to-b from-transparent via-transparent to-gray-500/20 flexCol items-center gap-3 shadow-xl">
                        <Image src={feature.icon} width={50} height={50} alt={feature.alt} />
                        <h1 className="font-medium text-2xl">{feature.title}</h1>
                        <p className="text-center text-zinc-400 text-[14px]">{feature.desc}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}