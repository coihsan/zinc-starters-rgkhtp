import {feature} from '@/app/constants/data'
import Image from 'next/image'
export default function Feature(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem]">
            <h1 className="textHeading">Feature</h1>
            <div className="w-full grid grid-cols-3 gap-3 max-[600px]:grid-cols-1">
                {feature.map((feature) =>(
                    <div className="p-5 rounded-lg">
                        <Image src={feature.icon} width={50} height={50} alt={feature.alt} />
                        <h1 className="font-medium ">{feature.title}</h1>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}