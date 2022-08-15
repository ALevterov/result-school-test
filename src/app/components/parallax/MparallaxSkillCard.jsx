import { motion } from 'framer-motion'
import { forwardRef } from 'react'

export const ParralaxSkillCard = forwardRef((props, ref) => {
  const { text, image, css } = props
  return (
    <div
      ref={ref}
      className={
        css +
        ` flex flex-col items-center xl:mt-[30rem] text-[#fff] trans:my-[1rem] md:my-[1rem] max-w-[20rem] exsm:max-w-[50%]`
      }
    >
      <div className='3xl:mb-[3rem] 2xl:mb-[3rem] xl:mb-[2rem] trans:mb-[1rem] md:mb-[1rem]'>
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
const MParralaxSkillCard = motion(ParralaxSkillCard)
export default MParralaxSkillCard
