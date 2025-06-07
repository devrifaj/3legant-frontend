"use client";
import { useEffect, useState } from "react";

const CountdownBanner = () => {
  const countdownEndTime = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = countdownEndTime - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-3 items-start my-6">
      <span className="text-base text-neutral-7">Offer expires in:</span>
      <div className="flex items-center gap-4   ">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="bg-neutral-1 w-[60px] h-[60px] flex-center">
              <span className="text-[34px] font-medium text-neutral-7 font-poppins">
                {String(Object.values(timeLeft)[index]).padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs text-neutral-7 capitalize">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownBanner;
