import './NewestWatchSection.module.css';
import { useScroll } from 'framer-motion';
import NewestInfo from './Content/NewestInfo';
import { JSX, useContext, useRef } from 'react';
import Watch from '../../images/NewestInfo-Watch.png';
import AnimatedBackground from './Content/AnimatedBackground';
import PrivateListForm from '../Private List/PrivateListForm';
import UserContext, { UserContextType } from '../../components/userContext';

const NewestWatchSection = (): JSX.Element => {

  const { payUp } = useContext<UserContextType | undefined>(UserContext)

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className='relative h-[700vh] w-360 bg-black snap-start'>
      <div className='sticky h-278.75 overflow-clip top-0 px-50 py-15 w-full bg-white'>
        <NewestInfo scrollYProgress={scrollYProgress} payUp={payUp} image={Watch}/>
        <AnimatedBackground scrollYProgress={scrollYProgress}/>
      </div>
    </section>
  )
}

export default NewestWatchSection