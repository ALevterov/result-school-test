const InfoBlock = ({ number, text }) => {
  return (
    <div className='info-block flex items-center max-w-[36rem]'>
      <div className='text-accent relative text-[7.2rem] mr-[1.6rem] lg:text-[5.6rem]'>
        {number}
      </div>
      <div className='text-[1.6rem] text-black lg:text-[1.2rem]'>{text}</div>
    </div>
  )
}

export default InfoBlock
