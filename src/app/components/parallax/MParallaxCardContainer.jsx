import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParallaxCardContainer = forwardRef((props, ref) => {
  const { children } = props
  return (
    <div
      className='grid grid-cols-3 gap-x-[3rem] max-w-[128rem] min-h-[25rem] overflow-hidden'
      ref={ref}
    >
      {children}
    </div>
  )
})

export default motion(MParallaxCardContainer)
