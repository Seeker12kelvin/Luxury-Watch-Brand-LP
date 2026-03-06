import ShowCaseInfo from './Content/ShowCaseInfo';
import { useScroll, useSpring } from 'framer-motion';
import Dark_Watch from '../../images/Dark-Watch.png';
import { JSX, useContext, useRef, useState } from 'react';
import PrivateListForm from '../Private List/PrivateListForm';
import AnimatedBackground from './Content/AnimatedBackground';
import UserContext, { UserContextType } from '../../components/userContext';

const ShowCaseSection = (): JSX.Element => {

  const { payUp } = useContext<UserContextType | undefined>(UserContext)

  const ref = useRef(null)
  const [bg, setBg] = useState<string>("#0C0C0C")

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.8
  })

  return (
    <section ref={ref} className='h-[800vh] w-360 relative'>
      <div className='sticky top-0 px-50 py-25 bg-white mix-blend-difference'>
        <ShowCaseInfo setBg={setBg} bg={bg} payUp={payUp} scrollYProgress={smoothScroll} />
        <AnimatedBackground scrollYProgress={smoothScroll} bg={bg} />
      </div>
    </section>
  )
}

export default ShowCaseSection
