import React from 'react'
import Footer from '../pages/Footer/Footer'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Header from '../components/Header'
import { watchCollection } from '../data'
import { motion } from 'framer-motion'

const DetailsPage = () => {

  const revealY = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    show: {
      clipPath: "inset(0 0 0% 0)",
      transition: { delay: 0.5, duration: 1.6, ease: 'easeInOut' }
    }
  }

  return (

    <div className='bg-[white] flex flex-col gap-21'>
      
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

            <motion.div
              variants={revealY}
              initial="hidden"
              animate="show"
              className='flex items-center gap-1 mix-blend-difference text-black'>

              <button
                className='uppercase bg-white h-9.5 py-2.5 px-3.5'>
                add to watchlist
              </button>

              <button
                className='bg-white flex items-center justify-center h-9.5 w-10.5'>

                <IoIosArrowRoundForward
                  className='w-6 h-6 shrink-0'
                />

              </button>

            </motion.div>

          </div>

        </section>

      </main>

      <div>

        <div className='flex justify-between w-full'>
          {watchCollection.map(data => (
            <img
            className='w-100 h-100 object-cover'
            src={data.img}
            alt={data.title} />
          ))}
        </div>

        <Footer />

      </div>

    </div>
  )
}

export default DetailsPage