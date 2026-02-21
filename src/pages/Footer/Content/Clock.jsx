import React, { useState, useEffect } from 'react';
import styles from '../Footer.module.css'

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const dayOfWeekNumber = time.getDay();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  const minuteDegrees = minutes * 6 + seconds * 0.1;
  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;

  return (
      <div className={`${styles['clock-background']} relative w-84 h-84 text-white text-[32px]`}>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#D9D9D9] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

        <h1 className='absolute top-5 left-1/2'>I</h1>

        <h1 className='absolute bottom-2 left-[47%]'>VI</h1>

        <h1 className='absolute bottom-[43%] left-[88%]'>III</h1>

        <h1 className='absolute bottom-[43%] left-5'>XI</h1>

        <p className='absolute bottom-1/2 left-[55%] text-[1rem]'>{hours}:{minutes} {ampm}</p>

        <p className='absolute bottom-[40%] left-[55%] text-[1rem] uppercase opacity-[0.5]'>{dayOfWeekName}</p>

        {/* Hour Hand */}
        <div 
          className="absolute bottom-1/2 left-1/2 w-[1.515px] h-[137.429px] bg-[#FFF] transform origin-bottom -translate-x-1/2 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
        ></div>

        {/* Minute Hand */}
        <div 
          className="absolute bottom-1/2 left-1/2 w-0.5 h-25.25 bg-[#FFF] transform origin-bottom -translate-x-1/2 rounded-full"
          style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
        ></div>

      </div>
  );
};

export default Clock;
