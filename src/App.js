import './index.css'
import professionBg from './app/assets/profession-bg.png'

function App() {
  return (
    <div className='page__wrapper'>
      <div className='pl-[115px] pt-[100px] section__introduction_wrapper'>
        <section
          className='introduction__section bg-cover bg-no-repeat bg-center h-[80vh]'
          style={{ backgroundImage: `url(${professionBg})` }}
        >
          <div className='introduction__content pl-[140px] pt-[85px]'>
            <div className='promo_title'>
              <h1 className='text-5xl font-golos-reg'>
                Профессия <br /> Frontend — разработчик
              </h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
