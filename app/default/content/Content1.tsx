import Image from 'next/image'

export default function Content1(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] max-[600px]:w-full max-[600px]:px-[0px] max-[600px]:py-[3rem]">
            <div className="w-full">
                <Image className="rounded-lg max-[600px]:rounded-none" src={'/1700042466851.webp'} width={1280} height={300} alt="content 1" />
            </div>
        </section>
    )
}