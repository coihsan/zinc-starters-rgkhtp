import Image from 'next/image'

export default function Content3(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] flex justify-evenly gap-5 max-[600px]:flexCol">
                <Image className="w-[50%] max-[600px]:w-[100%]" src={'/blank02.svg'} width={400} height={900} alt="image" />
            <div className="flex-1">
            </div>
            <div>
                <h1 className="text-3xl font-bold ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet massa nec felis vestibulum condimentum accumsan ac tortor. Etiam euismod consequat felis, pulvinar rutrum sapien elementum a. Vestibulum bibendum nisi in lacinia maximus. Phasellus pretium hendrerit purus, non lacinia augue ornare vitae. Suspendisse eleifend dapibus sem a gravida. Suspendisse non odio nisl. Nunc lobortis tellus vel ornare porttitor. Proin sed egestas ex, at vestibulum turpis.</p>
            </div>
        </section>
    )
}