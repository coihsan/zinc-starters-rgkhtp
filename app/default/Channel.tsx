import Image from 'next/image'
import { channelPlatform } from "@/app/constants/data";

export default function Channel(){
    return(
        <section className="w-full px-[1rem] py-[7rem] ">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid gap-3">
                    {channelPlatform.map((channel) => (
                        <div>
                            <Image src={channel.icon} width={50} height={50} alt="channel/>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}