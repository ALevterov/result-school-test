import professionBg from '../assets/profession-bg.png'
import Button from '../components/Button'
const MainPage = () => {
  return (
    <div className='page__wrapper font-golos'>
      <div
        className='3xl:pl-[11.5rem] 3xl:pt-[10rem] 2xl:pl-[8rem] 2xl:pt-[7rem] xl:pt-[6.4rem] xl:pl-[5.4rem]
			lg:pl-[3.8rem] lg:pt-[3.2rem] section__introduction_wrapper'
      >
        <section
          className='introduction__section bg-contain bg-no-repeat bg-center h-[83vh]'
          style={{ backgroundImage: `url(${professionBg})` }}
        >
          <div className='introduction__content 3xl:pl-[14.1rem] 3xl:pt-[7.4rem] 2xl:pl-[11rem] 2xl:pt-[5.4rem] xl:pl-[8.4rem] xl:pt-[4rem] lg:pl-[7.2rem] lg:pt-[3.2rem]'>
            <div className='introduction__content_main text-white'>
              <div className='promo_title'>
                <h1 className=' font-semibold 3xl:text-5xl 2xl:text-[4.3rem] xl:text-[3.6rem] lg:text-[2.8rem] leading-[130%]'>
                  Профессия <br /> Frontend — разработчик
                </h1>
              </div>
              <div className='promo_content font-semibold 3xl:text-[3rem] 3xl:w-[74.5rem] 3xl:mt-[3.2rem] 2xl:text-[2.4rem] 2xl:mt-[2.4rem] xl:text-[2rem] xl:w-[54rem] xl:mt-[2rem] lg:text-[1.6rem] lg:w-[42rem] lg:leading-[140%]'>
                Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
                знанием технологий больше, чем у других кандидатов
              </div>
              <div className='promo_description font-normal 3xl:text-base 3xl:w-[68.5rem] 3xl:mt-[3.3rem] 3xl:leading-[2.7rem] 2xl:text-[1.5rem] 2xl:mt-[2.6rem] xl:text-[1.2rem] xl:w-[52rem] xl:mt-[2rem] lg:text-[1rem] lg:leading-[1.8rem] lg:w-[40rem] lg:mt-[1.6rem]'>
                Начиная с основ изучишь JavaScript, разберешься с самыми
                популярными технологиями, научишься писать Frontend{' '}
                <span className='font-semibold'>на фреймворке</span> и связывать
                его с Backend.{' '}
                <span className='font-semibold'>
                  Навыки после курса оцениваются от 100 т.р.
                </span>
              </div>
              <div className='3xl:mt-[5rem] 2xl:mt-[3rem] xl:mt-[2rem]'>
                <Button text='Задать вопрос об обучении' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MainPage
