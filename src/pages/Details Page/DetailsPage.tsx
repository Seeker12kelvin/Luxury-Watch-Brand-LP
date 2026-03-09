import { JSX, useContext } from 'react';
import Footer from '../Footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { watchCollection } from '../../data';
import { IoIosArrowRoundForward } from 'react-icons/io';
import WaitlistButton from '../../components/WaitlistButton';
import ContactRvysion from '../Contact Rvysion/ContactRvysion';
import UserContext from '../../components/userContext';

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

    <div className='bg-[white] flex flex-col justify-self-center gap-21 w-358 overflow-x-hidden h-full z-1'>
      
      <div className='px-52 mix-blend-difference text-white'>

        <Header />

      </div>

      <main>

        <section className='px-52 py-5'>

          <div className='flex flex-col gap-6'>

            <div className='flex flex-col gap-2.5'>

              <motion.h1
                variants={revealY}
                initial="hidden"
                animate="show"
                className='text-[80px] font-semibold uppercase tracking-[-0.8px] leading-[80.8px]'>
                  Designed and built by Rvysion Studios
              </motion.h1>

              <div className='text-[1rem] tracking-[-0.32px] leading-[20.8px] font-light max-w-150 w-full flex flex-col gap-5'>

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

      <div>

        <div className='flex justify-between w-full'>
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