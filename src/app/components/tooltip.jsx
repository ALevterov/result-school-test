const Tooltip = ({ children }) => {
  return (
    <div className='info-tooltip relative rounded-[2.4rem] bg-white text-grey 3xl:text-[1.6rem] 3xl:w-[396px] 3xl:pt-[4rem] 3xl:px-[2.4rem] 3xl:pb-[3rem] 2xl:w-[30rem] 2xl:text-[1.3rem] 2xl:pt-[3rem] 2xl:px-[1.9rem] 2xl:pb-[2.2rem] xl:w-[30rem] xl:text-[1.3rem] xl:pt-[3rem] xl:px-[1.9rem] xl:pb-[2.2rem] lg:w-[280px] lg:text-[1.1rem] lg:pt-[2.6rem] lg:px-[1.7rem] lg:pb-[1.9rem]'>
      {children}
    </div>
  )
}

export default Tooltip
