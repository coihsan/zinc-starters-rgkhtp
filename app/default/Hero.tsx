import Image from "@/node_modules/next/image"
import CallUs from '@/app/ui/CallUs'
export default function Hero(){
    return (
        <section className="w-full mx-auto max-w-screen-xl px-[1rem] max-[600px]:pt-[2rem] pt-[2rem] gap-5 flex max-[600px]:flex-col-reverse items-center justify-between">
            <div className="flex-[1_1_0%] max-w-xl flex flex-col gap-3 max-[600px]:items-center">
                <span className="py-1 px-5 rounded-full bg-pink-800/40 w-max font-medium">Created with CodeSandbox</span>
                <h1 className="text-5xl max-[600px]:text-4xl font-bold max-[600px]:text-center">
                    Free template for creating <span className="underline decoration-pink-500">Landing Page</span> with <span className="underline decoration-zinc-950">Next.js </span> + <span className="underline decoration-sky-500">Tailwind CSS</span>
                </h1>
                <p className="max-[600px]:text-center pb-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <CallUs />
            </div>
            <div className="w-[50%] max-[600px]:w-full">
                <Image className="rounded-md flex-1 w-full" src={'/1700042466838.webp'} width={300} height={200} alt="Hero" />
            </div>
        </section>
    )
}