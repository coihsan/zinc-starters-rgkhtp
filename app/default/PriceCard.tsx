import {package1} from '@/app/constants/price'
import Image from '@/node_modules/next/image';
import React from 'react';

const PriceCard: React.FC = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-[1rem] py-[7rem] max-[600px]:py-[2rem]">
      <div className="mb-6">
        <h1 className="textHeading leading-none">Woohoo! The price has dropped</h1>
        <p className="text-center max-w-screen-md mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
      </div>
      <div className="grid grid-cols-3 max-[600px]:grid-cols-1 gap-3">
        {package1.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden relative bg-slate-950 p-9 rounded-[5%] border border-zinc-100/30 transition-all ease-linear hover:translate-y-[-5px] hover:shadow-[0px_10px_10px_#082f49]"
          >
            <div className="flex flex-col gap-3 items-center">
              <Image
                src={card.icon}
                width={50}
                height={50}
                alt="icon"
              />
              <h2
                style={card.theme}
                className="min-w-[50%] font-medium mx-auto text-center text-1xl py-1 px-3 rounded-full"
              >
                {card.name}
              </h2>
              <p className="text-center">{card.desc}</p>
            </div>
            <div className="flex flex-col items-center text-center py-[1rem]">
              <p className="text-3xl">Rp <span className="font-bold">{card.promoprice}</span></p>
              <span className="line-through">{card.basicprice}</span>
            </div>
            <ul className="grid gap-3">
              {card.package.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="text-center flexCenter gap-2 font-medium"
                >
                  <Image
                    className=""
                    src={"/check.svg"}
                    width={18}
                    height={18}
                    alt="checklist"
                  />
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
            <button
              className=" hoverButton w-full rounded-xl p-2 bg-zinc-950 text-white mt-[2rem] shadow-lg"
            >
              Call to Action
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceCard;

