import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import './App.scss';

function App() {
  const [sliderRef] = useKeenSlider();

  return (
    <div className='App'>
      <div ref={sliderRef} className='keen-slider'>
        <div className='keen-slider__slide custom-slide1'>1</div>
        <div className='keen-slider__slide custom-slide2'>2</div>
        <div className='keen-slider__slide custom-slide3'>3</div>
      </div>
    </div>
  );
}

export default App;
