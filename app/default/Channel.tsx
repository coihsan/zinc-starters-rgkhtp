import Image from 'next/image'
import { channelPlatform } from "@/app/constants/data";

export default function Channel(){
    return(
        <section className="w-full px-[1rem] py-[7rem] ">
            <div className="max-w-screen-xl mx-auto">
                <h1 className="textHeading">Choose Your Favorite Platform</h1>
                <div>
                    <h1></h1>
                </div>
                <div className="grid gap-3 max-w-[550px] border border-zinc-300 rounded-md p-5">
                    {channelPlatform.map((channel) => (
                        <div className="flex gap-5 p-4 border border-zinc-300 rounded-md">
                            <Image src={channel.icon} width={50} height={50} alt="channel" />
                            <div className="flex justify-between w-full">
                                <div className="flexCol gap-1">
                                    <h2 className="text-2xl font-medium leading-none">{channel.channelName}</h2>
                                    <span className="bg-green-500/40 w-max px-4 rounded-lg">{channel.promo}</span>
                                </div>
                                <a href={channel.urlTarget} className="px-8 py-1 rounded-md bg-zinc-800 text-white flexCenter">Shop</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}