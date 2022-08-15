import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParallaxTitleBlock = forwardRef((props, ref) => {
  const { children } = props
  return (
    <div
      className='flex 3xl:mt-[4rem] 3xl:w-[90rem] 3xl:mb-[10rem] 2xl:mt-[4rem] 2xl:w-[90rem] 2xl:mb-[10rem] xl:mt-[2.6rem] xl:w-[70rem] xl:mb-[6rem] lg:mt-[2rem] lg:mb-[4rem]'
      ref={ref}
    >
      {children}
    </div>
  )
})

export default motion(MParallaxTitleBlock)
