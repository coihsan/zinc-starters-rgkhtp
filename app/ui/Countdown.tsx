"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import CallUs from "@/app/ui/CallUs";

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const calculateRemainingTime = () => {
      const targetTime = new Date('2024-11-14');
      const difference = targetTime.getTime() - currentTime.getTime();

      if (difference < 0) {
        setRemainingTime(null);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setRemainingTime(formattedTime);
    };

    calculateRemainingTime();

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  if (remainingTime === null) {
    return <div>Countdown has expired!</div>;
  }

  return (
    <section className='w-full bg-slate-950 py-[7rem] px-[1rem] '>
      <div className='max-w-screen-xl mx-auto flex items-center justify-evenly max-[600px]:flexCol max-[600px]:items-center'>
            <Image src={'/clock.svg'} width={250} height={10} alt="clock" />
        <div className="flexCol gap-3 max-[600px]:items-center">
          <h1 className='text-5xl font-bold max-[600px]:text-center'>Limited time offer</h1>
          <div className='text-3xl font-bold w-max flex gap-2'>
            <span className="bg-cyan-950/30 p-5 rounded-lg text-cyan-500">14</span>
            <span className="bg-cyan-950/30 p-5 rounded-lg text-cyan-500">Nov</span>
            <span className="bg-cyan-950/30 p-5 rounded-lg text-cyan-500">2024</span>
          </div>
          <p className='font-bold text-2xl max-[600px]:text-[18px]'>Remaining time: {remainingTime}</p>
          <div className="py-[1rem]">
            <CallUs />
          </div>
        </div>
      </div>
    </section>
  )
};

export default CountdownTimer;
