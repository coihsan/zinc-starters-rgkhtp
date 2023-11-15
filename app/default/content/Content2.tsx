import Image from 'next/image'

export default function Content2(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] max-[600px]:py-[2rem]">
            <div className="items-center flexCol mx-auto w-full gap-5">
                <Image className="rounded-lg bg-rose-500" src={'/blank.svg'} width={500} height={300} alt="content 1" />
                <center className="text-3xl font-bold text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</center>
                <center className="text-center max-w-screen-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet massa nec felis vestibulum condimentum accumsan ac tortor. Etiam euismod consequat felis, pulvinar rutrum sapien elementum a. Vestibulum bibendum nisi in lacinia maximus. Phasellus pretium hendrerit purus, non lacinia augue ornare vitae. Suspendisse eleifend dapibus sem a gravida. Suspendisse non odio nisl. Nunc lobortis tellus vel ornare porttitor. Proin sed egestas ex, at vestibulum turpis.</center>
            </div>
        </section>
    )
}