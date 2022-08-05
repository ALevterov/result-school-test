const Button = ({ text, onClick }) => {
  return (
    <button className='3xl:px-[4rem] 3xl:py-[2.8rem] 3xl:text-2xl 2xl:px-[3.4rem] 2xl:py-[2.2rem] 2xl:text-xl xl:text-[1.3rem] xl:px[2.4rem] xl:py[1.6rem] lg:text-[1.1rem] lg:px-[2rem] lg:py-[1.3rem] bg-accent rounded-full '>
      {text}
    </button>
  )
}

export default Button
