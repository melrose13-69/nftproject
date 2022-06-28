import './App.scss'
import 'swiper/css'
import React, { FC, useEffect, useState } from 'react'
import MainContent from '../Main/MainContent'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import Roadmap from '../Roadmap/Roadmap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Mousewheel } from 'swiper'
import { CreativeEffectOptions } from 'swiper/types'
import Team from '../Team/Team'
import Footer from '../Footer/Footer'

const creativeEffectOptions: CreativeEffectOptions = {
  prev: {
    shadow: true,
    translate: [0, '100%', 0]
  },
  next: {
    translate: [0, '100%', 0]
  }
}

const App: FC = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  return (
    <div className="App">
      <main>
        <Swiper
          direction={'vertical'}
          cssMode={true}
          slidesPerView={1}
          mousewheel={true}
          modules={[Mousewheel]}
          onSlideChange={(e): void => setSlideIndex(e.activeIndex)}
        >
          <SwiperSlide>
            <MainContent/>
          </SwiperSlide>
          <SwiperSlide>
            <Roadmap/>
          </SwiperSlide>
          <SwiperSlide>
            <Team/>
          </SwiperSlide>
        </Swiper>
      </main>
      <AudioPlayer />
      {slideIndex === 2 ? <Footer/> : <></> }
    </div>
  )
}

export default App
