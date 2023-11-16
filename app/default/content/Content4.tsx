import Image from 'next/image'
import {content3} from '@/app/constants/data'
export default function Content3(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] max-[600px]:py-[3rem] flex justify-evenly gap-5 max-[600px]:flex-col-reverse">
            <div>
                <h1 className="text-3xl font-bold pb-[1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <p className="text-zinc-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet massa nec felis vestibulum condimentum accumsan ac tortor. Etiam euismod consequat felis, pulvinar rutrum sapien elementum a. Vestibulum bibendum nisi in lacinia maximus. Phasellus pretium hendrerit purus, non lacinia augue ornare vitae. Suspendisse eleifend dapibus sem a gravida. Suspendisse non odio nisl.</p>
                <ul className='list-image-[url(/check.svg)] pt-[2rem] flexCol gap-4 block'>
                    {content3.map((content) =>(
                        <li key={content.id} className='ml-[3rem] max-[600px]:ml-[2rem]'>
                            <h3 className='text-2xl font-medium leading-none'>{content.title}</h3>
                            <p className="text-zinc-400">{content.desc}</p>
                        </li> 
                    ))}
                </ul>
            </div>
             <Image className="w-[50%] max-[600px]:w-[100%] rounded-lg" src={'/1700042466844.webp'} width={400} height={900} alt="image" />
        </section>
    )
}