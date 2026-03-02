import { motion } from 'framer-motion';
import styles from '../Footer.module.css';
import React, { JSX, useState, useEffect } from 'react';

const Clock = (): JSX.Element => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds: number = time.getSeconds();
  const minutes: number = time.getMinutes();
  const hours: number = time.getHours();
  const ampm: string = hours >= 12 ? 'PM' : 'AM';

  const dayOfWeekNumber: number = time.getDay();
  const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekName: string = daysOfWeek[dayOfWeekNumber];

  const minuteDegrees: number = minutes * 6 + seconds * 0.1;
  const hourDegrees: number = (hours % 12) * 30 + minutes * 0.5;

  return (
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: { delay: 1.6, duration: 1.6, ease: 'easeIn' }}}
        viewport={{once: true}}
        className={`${styles['clock-background']} relative w-84 h-84 text-white text-[32px]`}>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#D9D9D9] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

        <h1 className='absolute top-5 left-[46.5%]'>XII</h1>

        <h1 className='absolute bottom-2 left-[47%]'>VI</h1>

        <h1 className='absolute bottom-[43%] left-[88%]'>III</h1>

        <h1 className='absolute bottom-[43%] left-5'>IX</h1>

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

      </motion.div>
  );
};

export default Clock;
