import {testimonial} from '@/app/constants/data'
import Image from '@/node_modules/next/image'
export default function Testimoni(){
    const renderStars = () => {
        const stars = [];
        const numStars = 5;
    
        for (let i = 0; i < numStars; i++) {
          stars.push(
            <Image
              key={i}
              src={'/star-fill.svg'}
              width={16}
              height={16}
              alt={`star-${i}`}
            />
          );
        }
    
        return stars;
      };
    return(
        <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] max-[600px]:py-[2rem]">
            <h1 className='textHeading'>Testimoni</h1>
            <div className='w-full grid grid-cols-3 gap-3 max-[600px]:flex max-[600px]:overflow-scroll'>
            {testimonial.map((person) =>(
            <div key={person.id} className='flex flex-col items-center gap-3 bg-gray-950 rounded-md border border-gray-700/30 p-9 max-[600px]:flex-1 max-[600px]:min-w-full'>
                <Image className='object-cover' src={person.picture} width={40} height={40} alt="user"/>
                <div className="flex gap-1">
                {renderStars()}
                </div>
                <span className='text-center'>{person.message}</span>
                <h3 className='font-bold text-center'>{person.name}</h3>
            </div>
            ))}
            </div>
        </section>
    )
}