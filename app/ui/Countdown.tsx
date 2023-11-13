"use client"
import { useState, useEffect } from 'react';

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
    <section className='w-full'>
      <div className='max-w-screen-xl mx-auto px-[1rem] flex flex-col items-center justify-center gap-3'>
        <h1 className='text-4xl font-bold'>Join today and get bonus extra</h1>
        <h2 className='text-3xl font-bold bg-white rounded-xl p-5 w-max'>14 November 2024</h2>
        <p className='font-bold text-2xl'>Remaining time: {remainingTime}</p>
      </div>
    </section>
  )
};

export default CountdownTimer;
