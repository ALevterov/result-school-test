import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const MParralaxSkillCard = forwardRef((props, ref) => {
  const { text, image } = props
  return (
    <div ref={ref} className={`flex flex-col items-center`}>
      <div className='mb-[3rem]'>
        <img src={image} alt='svg icon' />
      </div>
      <div className='text-[2.2rem] text-center'>{text}</div>
    </div>
  )
})

export default motion(MParralaxSkillCard)
