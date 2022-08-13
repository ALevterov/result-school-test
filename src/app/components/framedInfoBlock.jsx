const FramedInfoBlock = ({ children, header, css }) => {
  return (
    <div
      className={
        css +
        ' framed_info-block 3xl:px-[20px] 3xl:py-[24px] 2xl:px-[20px] 2xl:py-[24px]'
      }
    >
      <h3 className=' text-purple text-[1.4rem]'>{header}</h3>
      {children}
    </div>
  )
}

export default FramedInfoBlock
