import Image from 'next/image'

export default function Content2(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] ">
            <div className="flex items-center justify-between w-full gap-5 max-[600px]:flexCol">
                <div className="flex-1 w-full max-[600px]:flex-none">
                    <Image className="w-full rounded-lg " src={'/blank.svg'} width={300} height={300} alt="content 1" />
                </div>
                <div className="flex-1 flexCol gap-4">
                    <h1 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h1>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet massa nec felis vestibulum condimentum accumsan ac tortor. Etiam euismod consequat felis, pulvinar rutrum sapien elementum a. Vestibulum bibendum nisi in lacinia maximus. Phasellus pretium hendrerit purus, non lacinia augue ornare vitae. Suspendisse eleifend dapibus sem a gravida. Suspendisse non odio nisl. Nunc lobortis tellus vel ornare porttitor. Proin sed egestas ex, at vestibulum turpis.</p>
                </div>
            </div>
        </section>
    )
}