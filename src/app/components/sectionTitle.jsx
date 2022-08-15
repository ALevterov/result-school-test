const SectionTitle = ({ text, iconParam }) => {
  return (
    <h1
      className={
        iconParam +
        ' section-title relative text-black font-bold 3xl:text-[5.4rem] 3xl:mb-[3rem] 2xl:text-[4.4rem] 2xl:mb-[2.7rem] xl:text-[3.8rem] xl:mb-[2.4rem] lg:text-[3.2rem] lg:mb-[2rem] md:text-[2.6rem]'
      }
    >
      {text}
    </h1>
  )
}

export default SectionTitle
