"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

const CountdownTimer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const calculateRemainingTime = () => {
      const targetTime = new Date('2024-11-14');
      const difference = targetTime - currentTime;

      if (difference < 0) {
        setRemainingTime(null);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setRemainingTime(`${hours}:${minutes}:${seconds}`);
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
    <section className='w-full bg-zinc-200 py-[7rem] px-[1rem]'>
      <div className='max-w-screen-xl mx-auto px-[1rem] flexCol items-center justify-center gap-3'>
        <Image src={'/clock.svg'} width={150} height={150} alt="clock" />
        <h1 className='text-5xl font-bold'>Limited time offer</h1>
          <h2 className='text-3xl font-bold w-max flex gap-2'>
            <span className="bg-white p-5 rounded-lg">14</span>
            <span className="bg-white p-5 rounded-lg">Nov</span>
            <span className="bg-white p-5 rounded-lg">2024</span>
          </h2>
          <p className='font-bold text-2xl'>Remaining time: {remainingTime}</p>
      </div>
    </section>
  )
};

export default CountdownTimer;
