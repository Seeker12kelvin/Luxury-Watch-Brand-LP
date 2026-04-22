import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MdClose } from 'react-icons/md';
import Logo from '../../components/Logo';
import { JSX, useContext, useRef } from 'react';
import styles from './PrivateListForm.module.css';
import UserContext from '../../components/userContext';
import { IoIosArrowRoundForward } from 'react-icons/io';

const PrivateListForm = (): JSX.Element | null => {

  const handleSubmit = (e: any): void => {
    e.preventDefault()
  }

  const context = useContext(UserContext)
  if(!context){
    return null
  }
  const { modal, setModal, selectedImage } = context

  const formRef = useRef<HTMLElement | any>(null)
  const divRef = useRef<HTMLElement | any>(null)
  const btnRef = useRef<HTMLElement | any>(null)
  const arrowRef = useRef<HTMLElement | any>(null)
  
  useGSAP(() => {
    const div = divRef.current
    const form = formRef.current
    
    const tl = gsap.timeline()
    if(!modal){
      gsap.to(div, {opacity: 0, display: 'none', duration: 0.5})
      gsap.to(form, {opacity: 0, scale: 0, duration: 0.5})
    } else {
      tl
      .to(div, {opacity: 1, display: 'flex', duration: 0.5})
      .to(form, {opacity: 1, scale: 1, duration: 0.5})
    }
  }, [modal])

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
      className='hidden opacity-0 h-full w-full fixed z-100 mx-auto top-0 bg-[#0000005f] items-center justify-center max-[481px]:max-h-screen max-[481px]:max-w-screen'>
      
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${styles['private-form']} w-150 h-fit bg-[#FFF]`}>
        <div className={`${styles['private-section']} flex-1 border-b-[0.5px] border-[#00000066] justify-between`}>
          <div className={`${styles['private-section-text']}`}>
            <p>Join the</p>
            <span className='mix-blend-difference text-white'>
              <Logo />
            </span>
            <p>private release list</p>
          </div>
          <button
            onClick={() => setModal(false)}
            type="button"
            className='bg-[#E6E6E6] w-10.5 h-10.5 flex items-center justify-center text-2xl'>
            <MdClose />
          </button>
        </div>

        <div className='py-4 px-8 w-full flex flex-col gap-8 max-[422px]:px-4'>

          <p className='text-sm font-light tracking-[-0.14px] leading-5.25 text-[#111] max-[422px]:text-[0.8rem] w-full'>
            Selected Brantium timepieces are currently in production. Early access is offered to a limited group of collectors and prospective owners.
          </p>
          
          <div className='flex flex-col gap-5'>

            <div className='flex flex-col gap-2.5'>

              <h4 className='text-sm font-normal tracking-[-0.14px] leading-5.25 text-[#111] opacity-[0.5]'>
                Selected product:
              </h4>

              <img
                className='object-cover w-25 h-25'
                src={selectedImage}
                alt='Selected item'
              />

            </div>

            <div className='flex gap-5 justify-between w-full max-[422px]:flex-col max-[422px]:items-center'>
              <label>
                Email address
                <input name="user-name" required placeholder='your@email.com' type="email"/>
              </label>
              
              <label>
                Area of interest
                <input name="product-name" required placeholder='Select an option' type="text"/>
              </label>
            </div>

            <div
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="flex gap-1 items-center w-full">
              
              <button
                ref={btnRef}
                style={{width: '100%', opacity: 1, backgroundColor: '#111111', color: '#ffffff'}}
                className="origin-left h-12 w-full text-sm font-extralight overflow-hidden">
                REQUEST ACCESS
              </button>

              <button
                ref={arrowRef}
                style={{background: 'linear-gradient(to bottom, rgb(0, 0, 0) 100%, rgb(225, 225, 225) 0%)', color: '#ffffff'}}
                className="w-10.5 h-12 shrink-0 flex items-center justify-center">
                <IoIosArrowRoundForward size={24} />
              </button>
            
            </div>

          </div>

          <div className='flex gap-2 items-start bg-[#1111110A] p-4'>
            <IoIosArrowRoundForward className='text-3xl' />

            <p className='text-sm text-[#111] flex-1 font-light tracking-[-0.14px] leading-5.25 max-[422px]:text-[0.8rem]'>
              Your information is kept strictly confidential.
              <br />
              No advertising. No third-party sharing. Private communication only.
            </p>
          </div>

        </div>

      </form>
    </div>
  )
};

export default PrivateListForm;
