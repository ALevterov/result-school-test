import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParralaxSkillCard = forwardRef((props, ref) => {
  const { text, image } = props
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center mt-[30rem] text-[#fff]`}
    >
      <div className='3xl:mb-[3rem] 2xl:mb-[3rem] xl:mb-[2rem]'>
        <img
          className='xl:max-w-[40px] lg:max-w-[34px]'
          src={image}
          alt='svg icon'
        />
      </div>
      <div className='text-center 3xl:text-[2.2rem] 2xl:text-[2.2rem] xl:text-[1.6rem] lg:text-[1.2rem]'>
        {text}
      </div>
    </div>
  )
})

export default motion(MParralaxSkillCard)
