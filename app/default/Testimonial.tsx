import {testimonial} from '@/app/constants/data'
export default function Testimoni(){
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] w-full grid grid-cols-3 gap-3">
            {testimonial.map((person) =>(
            <div className='flex flex-col bg-zinc-200 rounded-md border border-zinc-300 p-5'>
                <h3>{person.name}</h3>
                <span>{person.message}</span>
            </div>
            ))}
        </section>
    )
}