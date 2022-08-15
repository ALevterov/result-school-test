import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParallaxSkillTitle = forwardRef((props, ref) => {
  const { text, op } = props
  return (
    <div
      ref={ref}
      className={`text-[#fff] font-semibold opacity-${op} uppercase 3xl:text-[2.4rem] 2xl:text-[2.4rem] xl:text-[1.5rem] lg:text-[1.2rem] mx-[2rem]`}
    >
      {text}
    </div>
  )
})

export default motion(MParallaxSkillTitle)
