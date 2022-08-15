import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParallaxTitle = forwardRef((props, ref) => {
  const { text } = props
  return (
    <h2
      ref={ref}
      className='text-[#fff] font-bold 3xl:text-[5.4rem] 2xl:text-[5.4rem] xl:text-[3.8rem] lg:text-[3rem]'
    >
      {text}
    </h2>
  )
})

export default motion(MParallaxTitle)
