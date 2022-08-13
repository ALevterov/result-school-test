import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParallaxTitleBlock = forwardRef((props, ref) => {
  const { children } = props
  return (
    <div className='flex mt-[4rem] w-[80rem] mb-[10rem]' ref={ref}>
      {children}
    </div>
  )
})

export default motion(MParallaxTitleBlock)
