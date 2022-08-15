import Button from '../components/button'
import safari from '../assets/mobile-safari.png'
import Tooltip from '../components/tooltip'
import InfoBlock from '../components/infoBlock'
import SectionTitle from '../components/sectionTitle'
import SectionDescription from '../components/sectionDescription'
import devChat from '../assets/dev-chat.png'
import FramedInfoBlock from '../components/framedInfoBlock'
import { ParralaxSkillCard } from '../components/parallax/MparallaxSkillCard'

import SVG1 from '../assets/parallax/1.svg'
import SVG2 from '../assets/parallax/2.svg'
import SVG3 from '../assets/parallax/3.svg'
import SVG4 from '../assets/parallax/4.svg'
import SVG5 from '../assets/parallax/5.svg'
import SVG6 from '../assets/parallax/6.svg'

const MobileVersion = () => {
  return (
    <div className='mobile__page_wrapper font-golos'>
      <section className='introduction__section bg-blue flex flex-col items-center text-[#fff] p-[2rem]'>
        <h1 className='text-center text-[3rem] mt-[3rem] font-bold'>
          Профессия Frontend — разработчик
        </h1>
        <div className='introduction_description text-center text-[2rem] max-w-[60rem] mt-[2rem]'>
          Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием
          технологий больше, чем у других кандидатов
        </div>
        <div className='introduction_additional_info text-center text-[1.4rem] my-[1.4rem] max-w-[50rem]'>
          Начиная с основ изучишь JavaScript, разберешься с самыми популярными
          технологиями, научишься писать Frontend на фреймворке и связывать его
          с Backend. Навыки после курса оцениваются от 100 т.р.
        </div>
        <Button text='Задать вопрос об обучении' />
      </section>
      <section className='introduction_project__section'>
        <div className='introduction_project flex flex-col items-center'>
          <img className='object-contain' src={safari} alt='учебный проект' />
          <Tooltip css='mt-[-5rem]'>
            <span className='text-accent'>Обучение</span>{' '}
            <b className='text-black font-normal'> для тех</b>, кто готов
            учиться 10 часов в неделю,{' '}
            <span className='text-accent'>чтобы получить результат</span> .{' '}
            <b className='text-black font-normal'>Мы даем</b> необходимые навыки{' '}
            <b className='text-black font-normal'>на продвинутом уровне</b>,
            убирая все лишнее
          </Tooltip>
        </div>
      </section>
      <section className='section__info flex justify-center mt-[3rem]'>
        <div className='w-[30rem]'>
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
      <section className='section__development mt-[3rem] flex flex-col items-center text-center'>
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
        <img
          className='object-contain my-[2rem]'
          src={devChat}
          alt='Чат учеников'
        />
        <FramedInfoBlock
          header='2 Командных проекта'
          css='3xl:w-[32.4rem] 2xl:w-[32.4rem] xl:w-[24rem] my-[1rem]'
        >
          <article className='3xl:text-[1.4rem] 2xl:text-[1.4rem] xl:text-[1rem]'>
            <p className='pb-[1.6rem]'>
              Симуляция комерческого проекта - получаете ТЗ и организовываете
              командную разработку. Прокачивая навыки для будущей работы.
            </p>
            <b className='font-medium'>Проекты на тему:</b> <br /> - JavaScript
            плагин "Контекстное меню" <br /> - Cайт на React, презентующий
            команду участников
          </article>
        </FramedInfoBlock>
        <FramedInfoBlock
          header='Индивидуальные проекты'
          css='3xl:w-[32.4rem] 2xl:w-[32.4rem] xl:w-[24rem] my-[1rem]'
        >
          <article className='3xl:text-[1.4rem] 2xl:text-[1.4rem] xl:text-[1rem]'>
            <p className='pb-[1.6rem]'>
              Чтобы свободно чуствовать себя на позиции junior необходим опыт
              разработки. Вы создадите 3 проекта изучая материал от простого к
              сложному:
            </p>
            1. Проект корзина с товарами для интернет-магазина <br /> 2.
            Социальная сеть для поиска и знакомств <br /> 3.Дипломный проект на
            выбранную вами тему: - Учет доходов и рассходов <br /> -
            Бронирование отелей - <br /> Интернет-магазин или схожий по
            сложности проект, которым вы выберети и утвердите с куратором
          </article>
        </FramedInfoBlock>
        <span className='text-[1.3rem] text-black cursor-pointer my-[1rem]'>
          Проекты учеников
        </span>
      </section>
      <section className='skills__section bg-black m-[1rem] rounded-[2rem] text-[#fff] p-[1rem]'>
        <h1 className='text-center text-[2.6rem] m-[2rem] font-bold '>
          Что тебе даст прохождение курса?
        </h1>
        <div className='flex'>
          <div className='flex flex-col items-center w-[100%]'>
            <div className='flex justify-center items-stretch exsm:w-[100%]'>
              <div className='text-center text-semibold trans:w-[20rem] md:w-[20rem] xsm:w-[20rem]  exsm:w-[50%] text-accent mb-[1rem]'>
                SKILLS UPGRADE
              </div>
              <div className='text-center text-semibold trans:w-[20rem] md:w-[20rem] xsm:w-[20rem] exsm:w-[50%] text-blue'>
                STRONG HARD SKILLS
              </div>
            </div>
            <div className='flex justify-center items-stretch '>
              <ParralaxSkillCard
                css='rounded-[2rem] border-solid border-accent border-[2px] p-[1rem] mx-[0.5rem]'
                image={SVG1}
                text='Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков'
              />
              <ParralaxSkillCard
                css='rounded-[2rem] border-solid border-blue border-[2px] p-[1rem] mx-[0.5rem]'
                image={SVG4}
                text='Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация'
              />
            </div>
            <div className='flex justify-center items-stretch'>
              <ParralaxSkillCard
                css='rounded-[2rem] border-solid border-accent border-[2px] p-[1rem] mx-[0.5rem]'
                image={SVG2}
                text='твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше '
              />
              <ParralaxSkillCard
                css='rounded-[2rem] border-solid border-blue border-[2px] p-[1rem] mx-[0.5rem]'
                image={SVG5}
                text='Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend'
              />
            </div>
            <div className='flex justify-center items-stretch'>
              <ParralaxSkillCard
                css='rounded-[2rem] border-solid border-accent border-[2px] p-[1rem] mx-[0.5rem]'
                image={SVG3}
                text='Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior '
              />
              <ParralaxSkillCard
                css='rounded-[2rem] border-solid border-blue border-[2px] p-[1rem] mx-[0.5rem]'
                image={SVG6}
                text='Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobileVersion
