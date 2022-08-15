import professionBg from '../assets/profession-bg.png'
import Button from '../components/button'
import Tooltip from '../components/tooltip'
import InfoBlock from '../components/infoBlock'
import SectionTitle from '../components/sectionTitle'
import SectionDescription from '../components/sectionDescription'
import devChat from '../assets/dev-chat.png'
import FramedInfoBlock from '../components/framedInfoBlock'
import ParallaxBlock from '../components/parallax/parallaxBlock'
import { useEffect, useRef, useState } from 'react'
const MainPage = () => {
  const parallaxRef = useRef(null)
  const [parRef, setParRef] = useState(false)
  useEffect(() => {
    if (parallaxRef) {
      setParRef(true)
    }
  }, [parallaxRef])
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
          <div className='introduction__content relative 3xl:pl-[14.1rem] 3xl:pt-[7.4rem] 2xl:pl-[11rem] 2xl:pt-[6.2rem] xl:pl-[8.4rem] xl:pt-[4.4rem] lg:pl-[7.2rem] lg:pt-[3.8rem]'>
            <div className='introduction__content_main text-white'>
              <div className='promo_title'>
                <h1 className=' font-semibold 3xl:text-5xl 2xl:text-[4.3rem] xl:text-[3.6rem] lg:text-[2.8rem] leading-[130%]'>
                  Профессия <br /> Frontend — разработчик
                </h1>
              </div>
              <div className='promo_content font-semibold 3xl:text-[3rem] 3xl:w-[74.5rem] 3xl:mt-[3.2rem] 2xl:w-[70rem] 2xl:text-[2.4rem] 2xl:mt-[2.4rem] xl:text-[2rem] xl:w-[54rem] xl:mt-[2rem] lg:text-[1.6rem] lg:w-[42rem] lg:leading-[140%]'>
                Стань с нуля продвинутым Junior разработчиком за 7 месяцев с
                знанием технологий больше, чем у других кандидатов
              </div>
              <div className='promo_description font-normal 3xl:text-base 3xl:w-[68.5rem] 3xl:mt-[3.3rem] 3xl:leading-[2.7rem] 2xl:w-[62rem] 2xl:text-[1.5rem] 2xl:mt-[2.6rem] 2xl:leading-[2.1rem]  xl:text-[1.2rem] xl:w-[52rem] xl:leading-[2rem] xl:mt-[2rem] lg:text-[1rem] lg:leading-[1.6rem] lg:w-[40rem] lg:mt-[1.6rem]'>
                Начиная с основ изучишь JavaScript, разберешься с самыми
                популярными технологиями, научишься писать Frontend{' '}
                <span className='font-semibold'>на фреймворке</span> и связывать
                его с Backend.{' '}
                <span className='font-semibold'>
                  Навыки после курса оцениваются от 100 т.р.
                </span>
              </div>
              <div className='3xl:mt-[5rem] 2xl:mt-[4.7rem] xl:mt-[3.6rem] lg:mt-[3.2rem]'>
                <Button text='Задать вопрос об обучении' />
              </div>
            </div>
            <div className='production__content_tooltip absolute left-[50%] bottom-[-21.5%]'>
              <Tooltip>
                <span className='text-accent'>Обучение</span>{' '}
                <b className='text-black font-normal'> для тех</b>, кто готов
                учиться 10 часов в неделю,{' '}
                <span className='text-accent'>чтобы получить результат</span> .{' '}
                <b className='text-black font-normal'>Мы даем</b> необходимые
                навыки{' '}
                <b className='text-black font-normal'>на продвинутом уровне</b>,
                убирая все лишнее
                <div className='excel-icon absolute w-[7.6rem] h-[7.6rem] rounded-[2.4rem] bg-blue flex justify-center items-center 3xl:top-[-28%] 3xl:left-[24%] 2xl:top-[-36%] 2xl:left-[23%] xl:top-[-36%] xl:left-[18%] lg:w-[6rem] lg:h-[6rem] lg:top-[] lg:left-[16%]'>
                  <svg
                    width={window.screen.width > 1024 ? '40' : '30'}
                    height={window.screen.width > 1024 ? '40' : '30'}
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M26.2706 1.72559C22.1461 0.758136 17.8538 0.758136 13.7295 1.72559C7.77333 3.1227 3.12272 7.77331 1.72559 13.7294C0.758136 17.8538 0.758136 22.1461 1.72559 26.2706C3.12272 32.2267 7.77333 36.8772 13.7295 38.2744C17.8538 39.2419 22.1461 39.2419 26.2706 38.2744C32.2267 36.8772 36.8772 32.2267 38.2744 26.2706C39.2419 22.1461 39.2419 17.8538 38.2744 13.7295C36.8772 7.77333 32.2267 3.1227 26.2706 1.72559V1.72559ZM10.9847 14.1713C11.4134 13.6569 12.178 13.5874 12.6924 14.0161L16.8922 17.5158C18.4435 18.8087 18.4435 21.1913 16.8922 22.4839L12.6924 25.9837C12.178 26.4125 11.4134 26.343 10.9847 25.8285C10.556 25.3141 10.6255 24.5494 11.1399 24.1206L15.3397 20.6209C15.7275 20.2976 15.7275 19.7021 15.3397 19.3789L11.1399 15.8791C10.6255 15.4504 10.556 14.6858 10.9847 14.1713V14.1713ZM21.0104 23.8397C20.3407 23.8397 19.7977 24.3826 19.7977 25.0523C19.7977 25.7219 20.3407 26.2649 21.0104 26.2649H28.0836C28.7533 26.2649 29.2962 25.7219 29.2962 25.0523C29.2962 24.3826 28.7533 23.8397 28.0836 23.8397H21.0104Z'
                      fill='white'
                    />
                  </svg>
                </div>
              </Tooltip>
            </div>
          </div>
        </section>
      </div>
      <section className='section__info mt-2 flex justify-center'>
        <div className='grid-cols-3 3xl:max-w-[128rem] 3xl:ml-[10rem] grid 3xl:gap-x-[9.8rem] 2xl:max-w-[128rem] 2xl:gap-x-[9.8rem] 2xl:ml-[10rem] xl:ml-[7rem] xl:max-w-[104rem] xl:gap-x-[7.4rem] lg:max-w-[86rem] lg:ml-[5rem]'>
          <InfoBlock
            text='HD видеоурока длительностью 3 - 15 минут'
            number='293'
          />
          <InfoBlock
            text='Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)'
            number='6'
          />
          <InfoBlock text='заданий и тестов для закрепления' number='193' />
        </div>
      </section>
      <section className='section__development flex flex-col items-center 3xl:mt-[10rem] 2xl:mt-[8rem]'>
        <SectionTitle
          text='Как именно ты станешь разработчиком'
          iconParam='question'
        />
        <SectionDescription>
          На курсе ты не просто изучаешь теоретический материал. В процессе
          изучения вы повторяете за действующим разработчиком, после чего{' '}
          <b className='text-black'>
            закрепляете знания на заданиях и проектах
          </b>
          .
        </SectionDescription>
        <div className='relative 3xl:mt-[6rem] 2xl:mt-[6rem] flex flex-col items-center mb-[8rem]'>
          <img
            className='xl:w-[60rem] lg:w-[50rem]'
            src={devChat}
            alt='Чат учеников'
          />
          <span className='text-[1.3rem] text-black cursor-pointer mt-[4rem]'>
            Проекты учеников
          </span>
          <FramedInfoBlock
            header='2 Командных проекта'
            css='absolute 3xl:left-[-30rem] 3xl:top-[11.2rem] 3xl:w-[32.4rem] 2xl:left-[-30rem] 2xl:top-[11.2rem] 2xl:w-[32.4rem] xl:w-[24rem] xl:left-[-22.2rem] xl:top-[8.5rem]'
          >
            <article className='3xl:text-[1.4rem] 2xl:text-[1.4rem] xl:text-[1rem]'>
              <p className='pb-[1.6rem]'>
                Симуляция комерческого проекта - получаете ТЗ и организовываете
                командную разработку. Прокачивая навыки для будущей работы.
              </p>
              <b className='font-medium'>Проекты на тему:</b> <br /> -
              JavaScript плагин "Контекстное меню" <br /> - Cайт на React,
              презентующий команду участников
            </article>
          </FramedInfoBlock>
          <FramedInfoBlock
            header='Индивидуальные проекты'
            css='absolute  3xl:right-[-30.5rem] 3xl:top-[21.5rem] 3xl:w-[39rem] 2xl:right-[-30.5rem] 2xl:top-[21.5rem] 2xl:w-[39rem] xl:w-[30rem] xl:right-[-24rem] xl:top-[16rem]'
          >
            <article className='3xl:text-[1.4rem] 2xl:text-[1.4rem] xl:text-[1rem]'>
              <p className='pb-[1.6rem]'>
                Чтобы свободно чуствовать себя на позиции junior необходим опыт
                разработки. Вы создадите 3 проекта изучая материал от простого к
                сложному:
              </p>
              1. Проект корзина с товарами для интернет-магазина <br /> 2.
              Социальная сеть для поиска и знакомств <br /> 3.Дипломный проект
              на выбранную вами тему: - Учет доходов и рассходов <br /> -
              Бронирование отелей - <br /> Интернет-магазин или схожий по
              сложности проект, которым вы выберети и утвердите с куратором
            </article>
          </FramedInfoBlock>
        </div>
      </section>
      <section
        className='section__parallax h-[3500px] bg-black m-[3rem] rounded-[2rem]'
        ref={parallaxRef}
      >
        {parRef && <ParallaxBlock offset={parallaxRef.current.offsetTop} />}
      </section>
    </div>
  )
}

export default MainPage
