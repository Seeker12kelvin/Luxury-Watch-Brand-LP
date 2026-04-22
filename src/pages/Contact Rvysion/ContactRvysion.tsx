import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdClose } from 'react-icons/md';
import { JSX, useContext, useRef } from 'react';
import styles from './ContactRvysion.module.css';
import Comp_Logo from '../../images/Comp_Logo.svg';
import UserContext from '../../components/userContext';
import { IoIosArrowRoundForward } from 'react-icons/io';


const ContactRvysion = (): JSX.Element | null=> {

  const divVariants: any = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {duration: 0.2, ease: 'easeIn'}
    },
    exit: {
      opacity: 0,
      transition: {duration: 0.2, ease: 'easeOut'}
    }
  }

  const formVariants: any = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 1,
      transition: {duration: 0.4, ease: 'easeIn'}
    },
    exit: {
      scale: 0,
      transition: {duration: 0.4, ease: 'easeOut'}
    }
  }

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { contactModal, setContactModal } = context

  const formRef = useRef<HTMLElement | any>(null)
  const divRef = useRef<HTMLElement | any>(null)
  const btnRef = useRef<HTMLElement | any>(null)
  const arrowRef = useRef<HTMLElement | any>(null)
  
  useGSAP(() => {
    const div = divRef.current
    const form = formRef.current
    
    const tl = gsap.timeline()
    if(!contactModal){
      gsap.to(div, {opacity: 0, display: 'none', duration: 0.5})
      gsap.to(form, {opacity: 0, scale: 0, duration: 0.5})
    } else {
      tl
      .to(div, {opacity: 1, display: 'flex', duration: 0.5})
      .to(form, {opacity: 1, scale: 1, duration: 0.5})
    }
  }, [contactModal])
  
  const onEnter = (): void => {
    const btn = btnRef.current
    const arrow = arrowRef.current

    const tl = gsap.timeline()
    tl
    .to(btn, {width: 'fit-content', opacity: 0.7, backgroundColor: '#ffffff', color: '#000000', duration: 0.25, ease: 'none'})
    .to(arrow, {background: 'linear-gradient(to bottom, rgb(0, 0, 0) 20%, rgb(225, 225, 225, 0) 0%)', color: '#000000', duration: 0.25, ease: 'none'}, "<")
  }

  const onLeave = (): void => {
    const btn = btnRef.current
    const arrow = arrowRef.current

    const tl = gsap.timeline()
    tl
    .to(btn, {width: '100%', opacity: 1, backgroundColor: '#111111', color: '#ffffff', duration: 0.25, ease: 'none'})
    .to(arrow, {background: 'linear-gradient(to bottom, rgb(0, 0, 0) 100%, rgb(225, 225, 225) 0%)', color: '#ffffff', duration: 0.25, ease: 'none'}, "<")
  }

  return (
    <div
      ref={divRef}
      className='hidden opacity-0 h-full w-full fixed z-100 mx-auto top-0 bg-[#0000005f] items-center justify-center max-[481px]:h-screen max-[481px]:max-w-screen'>
      <form
        ref={formRef}
        className={`${styles['login-form']}`}>
        <div className={`${styles['first-section']} flex-1 border-b-[0.5px] border-[#00000066] justify-between`}>
          <div className={`${styles['first-section-text']}`}>
            <p>Get in touch with the</p>
            <img src={Comp_Logo} alt='Rvysion Logo' />
            <p>team</p>
          </div>
          <button
            onClick={() => setContactModal(false)}
            type='button'
            className='bg-[#E6E6E6] w-10.5 h-10.5 flex items-center justify-center text-2xl'>
            <MdClose />
          </button>
        </div>

        <div className={`${styles['second-section']}`}>
          <div className={`gap-[2.02rem] flex flex-col h-full px-8 py-4 w-full max-[422px]:px-4`}>

            <div className='flex gap-5 justify-between w-full max-[481px]:flex-col'>
              <label>
                Your name
                <input name="user-name" required placeholder='Collins Donye' type="text"/>
              </label>
              
              <label>
                Brand or product name
                <input name="product-name" required placeholder='Rvysion Studios' type="text"/>
              </label>
            </div>
            
            <label className='flex-1'>
              Message
              <textarea placeholder='Enter your message here'>

              </textarea>
            </label>
            
            <div
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="flex gap-1 items-center w-full">
              
              <button
                ref={btnRef}
                style={{width: '100%', opacity: 1, backgroundColor: '#111111', color: '#ffffff'}}
                className="origin-left h-12 px-0 w-full text-sm font-extralight overflow-hidden">
                REQUEST ACCESS
              </button>

              <button
                ref={arrowRef}
                style={{background: 'linear-gradient(to bottom, rgb(0, 0, 0) 100%, rgb(225, 225, 225) 0%)', color: '#ffffff'}}
                className="w-10.5 h-12 shrink-0 flex items-center justify-center">
                <IoIosArrowRoundForward className='text-2xl' />
              </button>
            
            </div>


            <div className='flex gap-4 items-start bg-[#1111110A] p-4'>
              <div className='rounded-[4.8px] bg-[black] text-white h-10 w-10 flex items-center justify-center'>
                <span>Cal</span>
              </div>
              <div className='flex w-full flex-col items-start'>

                <div className='flex items-center justify-between w-full'>
                  <h4 className='text-[1rem] font-normal tracking-[-0.14px] text-[#111]' >Book a 1 on 1 call with us</h4>
                  <IoIosArrowRoundForward className='text-3xl' />
                </div>
                <p className='text-[0.875rem] font-light'>Schedule a 30-minute call to share your project goals and learn how we can craft a tailored exploration for your product or brand.</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactRvysion