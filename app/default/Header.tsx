import Image from "next/image"

export default function Header(){
    return(
        <header className="max-w-screen-xl mx-auto py-[2rem] px-[1rem] flex justify-center">
                <Image className="fill-white" src={'/zincstudio.svg'} width={200} height={100} alt="logo"/>
        </header>
    )
}