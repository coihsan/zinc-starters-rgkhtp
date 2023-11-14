import Image from 'next/image'

export default function Content1(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] ">
            <div className="w-full rounded-lg">
                <Image src={'/blank.svg'} width={1280} height={300} alt="content 1" />
            </div>
        </section>
    )
}