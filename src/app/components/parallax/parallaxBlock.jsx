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
import MParallaxCardContainer from './MParallaxCardContainer'

const ParallaxBlock = ({ offset }) => {
  console.log('offset: ', offset)
  // sex section

  const screenWidth = window.screen.width

  const { scrollY } = useScroll()

  const animationOffset = +offset + 600
  const inputChangeTitles = [animationOffset + 1350, animationOffset + 1400]
  const interval = 100
  const beginCardAnimation = animationOffset + 550
  const endOfFirstBlockAnimation = beginCardAnimation + interval * 4
  const beginOfSHS = animationOffset + 1400
  const beginOfSecondBlockAnimation = beginOfSHS + interval * 4
  const endOfSecondBlockAnimation = beginOfSecondBlockAnimation + interval * 4

  //заголовок появляется

  const titleOpacity = useTransform(
    scrollY,
    [
      animationOffset,
      animationOffset + 200,
      endOfSecondBlockAnimation + 300,
      endOfSecondBlockAnimation + 400,
    ],
    [0, 1, 1, 0]
  )

  // заголовок поднимается вверх
  let topPos, botPos
  if (screenWidth > 1280) {
    topPos = botPos = 100
  }
  if (screenWidth <= 1280 && screenWidth > 1024) {
    topPos = 0
    botPos = 120
  }
  if (screenWidth <= 1024) {
    topPos = -80
    botPos = 150
  }
  // console.log('topOffset', topOffset)
  const titleTop = useTransform(
    scrollY,
    [
      animationOffset + 300,
      animationOffset + 400,
      endOfSecondBlockAnimation + 150,
      endOfSecondBlockAnimation + 250,
    ],
    [topPos, -botPos, -botPos, topPos]
  )

  //появляются надписи над секциями
  const skillTitleColor = useTransform(
    scrollY,
    [animationOffset + 400, animationOffset + 450],
    ['#0f1214', '#fff']
  )

  // надписи уезжают влево
  // const inputChangeTitles = [animationOffset + 1350, animationOffset + 1400]

  const alignSkillTitle = useTransform(scrollY, inputChangeTitles, [300, 100])

  // левая надпись меняет цвет
  const opacitySU = useTransform(scrollY, inputChangeTitles, [1, 0.5])

  // правая надпись меняет цвет
  const opacitySHS = useTransform(scrollY, inputChangeTitles, [0.5, 1])

  const SUheight = useTransform(scrollY, inputChangeTitles, [250, 0])
  const SUminHeight = useTransform(scrollY, inputChangeTitles, ['100%', '0%'])

  const firstCardInput = [
    beginCardAnimation + interval,
    beginCardAnimation + interval * 2,
    endOfFirstBlockAnimation + interval,
    endOfFirstBlockAnimation + interval * 2,
  ]

  const secondCardInput = [
    beginCardAnimation + interval * 2,
    beginCardAnimation + interval * (2 + 1),
    endOfFirstBlockAnimation + interval * 2,
    endOfFirstBlockAnimation + interval * (2 + 1),
  ]

  const thirdCardInput = [
    beginCardAnimation + interval * 3,
    beginCardAnimation + interval * (3 + 1),
    endOfFirstBlockAnimation + interval * 3,
    endOfFirstBlockAnimation + interval * (3 + 1),
  ]

  const outputOpacity = [0, 1, 1, 0]
  const outputMargin = [300, 0, 0, 300]

  const firstCard = {
    opacity: useTransform(scrollY, firstCardInput, outputOpacity),
    marginTop: useTransform(scrollY, firstCardInput, outputMargin),
  }

  const secondCard = {
    opacity: useTransform(scrollY, secondCardInput, outputOpacity),
    marginTop: useTransform(scrollY, secondCardInput, outputMargin),
  }

  const thirdCard = {
    opacity: useTransform(scrollY, thirdCardInput, outputOpacity),
    marginTop: useTransform(scrollY, thirdCardInput, outputMargin),
  }

  const fourCardInput = [
    beginOfSHS + interval,
    beginOfSHS + interval * 2,
    beginOfSecondBlockAnimation + interval,
    beginOfSecondBlockAnimation + interval * 2,
  ]
  const fiveCardInput = [
    beginOfSHS + interval * 2,
    beginOfSHS + interval * (2 + 1),
    beginOfSecondBlockAnimation + interval * 2,
    beginOfSecondBlockAnimation + interval * (2 + 1),
  ]

  const sixCardInput = [
    beginOfSHS + interval * 3,
    beginOfSHS + interval * (3 + 1),
    beginOfSecondBlockAnimation + interval * 3,
    beginOfSecondBlockAnimation + interval * (3 + 1),
  ]

  const fourCard = {
    opacity: useTransform(scrollY, fourCardInput, outputOpacity),
    marginTop: useTransform(scrollY, fourCardInput, outputMargin),
  }

  const fiveCard = {
    opacity: useTransform(scrollY, fiveCardInput, outputOpacity),
    marginTop: useTransform(scrollY, fiveCardInput, outputMargin),
  }

  const sixCard = {
    opacity: useTransform(scrollY, sixCardInput, outputOpacity),
    marginTop: useTransform(scrollY, sixCardInput, outputMargin),
  }

  const SHSheightInput = [
    endOfSecondBlockAnimation,
    endOfSecondBlockAnimation + 50,
  ]

  const SHSheight = useTransform(scrollY, SHSheightInput, [250, 0])
  const SHSminHeight = useTransform(scrollY, SHSheightInput, ['100%', '0%'])

  const titleBlockOpacityInput = [
    endOfSecondBlockAnimation + 50,
    endOfSecondBlockAnimation + 150,
  ]
  const titleBlockOpacity = useTransform(
    scrollY,
    titleBlockOpacityInput,
    [1, 0]
  )

  // end of sex section

  return (
    <div className='sticky top-[25rem] h-[300px] flex items-center flex-col'>
      <MparallaxTitle
        style={{
          opacity: titleOpacity,
          marginTop: titleTop,
        }}
        transition={{ type: 'spring' }}
        text='Что тебе даст прохождение курса?'
      />
      <MParallaxTitleBlock
        transition={{ type: 'spring' }}
        style={{
          paddingLeft: alignSkillTitle,
          opacity: titleBlockOpacity,
        }}
      >
        <MparallaxSkillTitle
          transition={{ type: 'spring' }}
          op='100'
          text='skills upgrade'
          style={{
            opacity: opacitySU,
            color: skillTitleColor,
          }}
        />
        <MparallaxSkillTitle
          transition={{ type: 'spring' }}
          style={{
            opacity: opacitySHS,
            color: skillTitleColor,
          }}
          op='50'
          text='strong hard skills'
        />
      </MParallaxTitleBlock>
      <MParallaxCardContainer
        transition={{ type: 'spring' }}
        style={{
          height: SUheight,
          minHeight: SUminHeight,
        }}
      >
        <MparallaxSkillCard
          image={SVG1}
          text='Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков'
          style={firstCard}
        />
        <MparallaxSkillCard
          image={SVG2}
          text='твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше '
          style={secondCard}
        />
        <MparallaxSkillCard
          image={SVG3}
          text='Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior '
          style={thirdCard}
        />
      </MParallaxCardContainer>

      <MParallaxCardContainer
        style={{
          height: SHSheight,
          minHeight: SHSminHeight,
        }}
      >
        <MparallaxSkillCard
          image={SVG4}
          text='Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация'
          style={fourCard}
        />
        <MparallaxSkillCard
          image={SVG5}
          style={fiveCard}
          text='Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend'
        />
        <MparallaxSkillCard
          image={SVG6}
          style={sixCard}
          text='Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript'
        />
      </MParallaxCardContainer>
    </div>
  )
}

export default ParallaxBlock
