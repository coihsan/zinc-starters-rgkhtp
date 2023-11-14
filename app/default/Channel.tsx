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
                <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 ">
                    {channelPlatform.map((channel) => (
                        <div className="flex items-center gap-5 p-4 border border-zinc-300 rounded-md max-[600px]:flex-col max-[600px]:items-center">
                            <Image className="grayscale" src={channel.icon} width={50} height={50} alt="channel" />
                            <div className="flex items-center justify-between w-full max-[600px]:flex-col max-[600px]:gap-3">
                                <div className="flexCol gap-1 max-[600px]:items-center w-full">
                                    <h2 className="text-2xl font-medium leading-none">{channel.channelName}</h2>
                                    <p className="bg-zinc-300/70 w-max px-4 rounded-lg font-medium flex items-center gap-1 py-1 text-[14px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[20px] w-[20px]" data-name="Layer 24" viewBox="0 0 32 32" id="megaphone"><polygon fill="#18181b" points="17.707 22.293 16.293 23.707 19 26.414 19 27.586 18.586 28 17.414 28 13.707 24.293 12.293 25.707 16.586 30 19.414 30 21 28.414 21 25.586 17.707 22.293"></polygon><path fill="#333" d="M14.586,5L12,7.586V9.414l0.111,0.111L2,23.68v1.734L6.586,30H8.32L22.475,19.889,22.586,20h1.828L27,17.414V15.586L16.414,5H14.586ZM7.68,28H7.414L4,24.586V24.32l9.544-13.362,7.5,7.5ZM25,16.586L23.586,18H23.414L14,8.586V8.414L15.414,7h0.172L25,16.414v0.172Z"></path><rect width="7.071" height="2" x="22.964" y="4.5" fill="#18181b" transform="rotate(-45 26.5 5.5)"></rect><rect width="2" height="4" x="20" y="2" fill="#18181b"></rect><rect width="4" height="2" x="26" y="10" fill="#36b7ff"></rect></svg>
                                        {channel.promo}
                                    </p>
                                </div>
                                <div className="max-[600px]:w-full">
                                    <a href={channel.urlTarget} className="px-8 py-2 rounded-md bg-zinc-800 text-white flexCenter gap-2 hoverButton">
                                        Shop
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white " height="22" viewBox="0 -960 960 960" width="22"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}