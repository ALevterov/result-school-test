import { motion, useScroll, useTransform } from 'framer-motion'
import MparallaxSkillTitle from './MparallaxSkillTitle'
import MparallaxTitle from './MparallaxTitle'
import MParallaxTitleBlock from './MParallaxTitleBlock'

import SVG1 from '../../assets/parallax/1.svg'
import SVG2 from '../../assets/parallax/2.svg'
import SVG3 from '../../assets/parallax/3.svg'
import SVG4 from '../../assets/parallax/4.svg'
import SVG5 from '../../assets/parallax/5.svg'
import SVG6 from '../../assets/parallax/6.svg'
import MparallaxSkillCard from './MparallaxSkillCard'

const ParallaxBlock = ({ offset }) => {
  console.log('offset: ', offset)
  const { scrollY } = useScroll()

  const animationOffset = +offset + 600

  //заголовок появляется
  const titleOpacity = useTransform(
    scrollY,
    [animationOffset, animationOffset + 200],
    [0, 1]
  )

  // заголовок поднимается вверх
  const titleTop = useTransform(
    scrollY,
    [animationOffset + 200, animationOffset + 400],
    [0, -100]
  )

  //появляются надписи над секциями
  const skillTitleColor = useTransform(
    scrollY,
    [animationOffset + 400, animationOffset + 450],
    ['#0f1214', '#fff']
  )

  // надписи уезжают влево
  const alignSkillTitle = useTransform(
    scrollY,
    [animationOffset + 700, animationOffset + 750],
    [200, 50]
  )

  // левая надпись меняет цвет
  const opacitySU = useTransform(
    scrollY,
    [animationOffset + 700, animationOffset + 750],
    [1, 0.5]
  )

  // правая надпись меняет цвет
  const opacitySHS = useTransform(
    scrollY,
    [animationOffset + 700, animationOffset + 750],
    [0.5, 1]
  )

  return (
    <div className='sticky top-[25rem] h-[300px] flex items-center flex-col'>
      <MparallaxTitle
        style={{
          opacity: titleOpacity,
          marginTop: titleTop,
        }}
        text='Что тебе даст прохождение курса?'
      />
      <MParallaxTitleBlock
        style={{
          paddingLeft: alignSkillTitle,
        }}
      >
        <MparallaxSkillTitle
          op='100'
          text='skills upgrade'
          style={{
            opacity: opacitySU,
            color: skillTitleColor,
          }}
        />
        <MparallaxSkillTitle
          style={{
            opacity: opacitySHS,
            color: skillTitleColor,
          }}
          op='50'
          text='strong hard skills'
        />
      </MParallaxTitleBlock>
      <div className='grid grid-cols-3 gap-x-[3rem] relative overflow-hidden max-w-[128rem] h-[40rem]'>
        <MparallaxSkillCard
          image={SVG1}
          text='Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков'
        />
        <MparallaxSkillCard
          image={SVG2}
          text='твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше '
        />
        <MparallaxSkillCard
          image={SVG3}
          text='Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior '
        />
        <MparallaxSkillCard
          image={SVG4}
          text='Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация'
        />
        <MparallaxSkillCard
          image={SVG5}
          text='Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend'
        />
        <MparallaxSkillCard
          image={SVG6}
          text='Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript'
        />
      </div>
    </div>
  )
}

export default ParallaxBlock
