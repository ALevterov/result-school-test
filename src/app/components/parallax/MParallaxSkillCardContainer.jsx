import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParallaxSkillCardContainer = forwardRef((props, ref) => {
  const { children } = props
  return (
    <div
      className='grid grid-cols-3  min-h-[25rem] overflow-hidden 3xl:gap-x-[3rem] 3xl:max-w-[128rem] 2xl:gap-x-[3rem] 2xl:max-w-[128rem] xl:gap-x-[2rem] xl:max-w-[104rem] lg:gap-x-[1rem] lg:max-w-[80rem]'
      ref={ref}
    >
      {children}
    </div>
  )
})

export default motion(MParallaxSkillCardContainer)
