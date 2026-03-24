import Footer from '../Footer/Footer';
import { JSX, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import { watchCollection } from '../../data';
import UserContext from '../../components/userContext';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowRoundForward } from 'react-icons/io';
import WaitlistButton from '../../components/WaitlistButton';
import ContactRvysion from '../Contact Rvysion/ContactRvysion';

const DetailsPage = (): JSX.Element | null => {

  const revealY: any = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    show: {
      clipPath: "inset(0 0 0% 0)",
      transition: { delay: 0.5, duration: 1.6, ease: 'easeInOut' }
    }
  }

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { contactModal } = context

  return (

    <div className='bg-[white] flex flex-col justify-self-center gap-21 w-358 max-w-screen overflow-x-hidden h-full z-1 max-[510px]:gap-11 max-[510px]:h-full max-[510px]:max-h-screen'>
      
      <div className='px-52 mix-blend-difference text-white max-[1201px]:px-30 max-[937px]:px-20 max-[679px]:px-10 max-[430px]:px-5'>

        <motion.nav
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1.6}}
          className='flex w-full py-3 justify-between items-center z-1 max-[391px]:py-5'>

          <Logo />

          <div className='flex gap-1 items-center max-[391px]:hidden'>
            <Link
              to={'/details-page'}
              className={`uppercase bg-white text-[#111111] h-9.5 py-2.5 px-3.5`}>
                JOIN THE WAITLIST
            </Link>
            <Link
              to={'/details-page'}
              className={`bg-white flex items-center text-[#111111] justify-center h-9.5 w-10.5`}>
              <IoIosArrowRoundForward
                className='w-6 h-6 shrink-0'
              />
            </Link>
          </div>
        </motion.nav>

      </div>

      <main className='w-full'>

        <section className='px-52 py-5 max-[1201px]:px-30 max-[937px]:px-20 w-full max-[679px]:px-10 max-[430px]:px-5'>

          <div className='flex flex-col gap-6 w-full max-[496px]:items-center'>

            <div className='flex flex-col gap-2.5 w-full'>

              <motion.h1
                variants={revealY}
                initial="hidden"
                animate="show"
                className='text-[80px] font-semibold uppercase tracking-[-0.8px] leading-[80.8px] max-[857px]:text-[65px] max-[724px]:text-[60px] max-[599px]:text-[55px] max-[599px]:leading-15 max-[555px]:text-[50px] max-[555px]:leading-14 max-[510px]:text-[45px] max-[496px]:text-center max-[466px]:text-[40px] max-[422px]:text-[35px] max-[422px]:leading-12'>
                  Designed and built by Rvysion Studios
              </motion.h1>

              <div className='text-[1rem] tracking-[-0.32px] leading-[20.8px] font-light max-w-150 w-full flex flex-col gap-5 max-[599px]:text-[0.9rem] max-[496px]:text-center max-[466px]:text-[0.8rem]'>

                <motion.p
                  variants={revealY}
                  initial="hidden"
                  animate="show">
                  This landing experience was crafted at Rvysion as a creative exploration for Aether, demonstrating how an expressive, illustration-led visual language can simplify and elevate the architecture of the finance industry.
                </motion.p>

                <motion.p
                  variants={revealY}
                  initial="hidden"
                  animate="show">
                  We set out to reimagine how multi-currency wallets, liquidity access, virtual accounts, payouts, and integrations could be communicated with greater clarity, intuitiveness, and a more human, premium feel.
                </motion.p>

                <motion.p
                  variants={revealY}
                  initial="hidden"
                  animate="show">
                  If you’re interested in an exploratory direction for your own product or brand, join our waitlist and let’s talk about what we can build together.
                </motion.p>

              </div>
            </div>

            <WaitlistButton variants={revealY} extraStyling={'black'} textColor={'white'} />

          </div>

        </section>

      </main>

      <div className='w-full'>

        <div className='flex justify-between w-full overflow-scroll'>
          {watchCollection.map(data => (
            <img
              className='w-100 h-100 object-cover'
              src={data.img}
              alt={data.title}
              key={data.id}
            />
          ))}
        </div>

        <Footer />

      </div>
      
      <AnimatePresence mode="wait">
        {contactModal && <ContactRvysion />}
      </AnimatePresence>

    </div>
  )
}

export default DetailsPage