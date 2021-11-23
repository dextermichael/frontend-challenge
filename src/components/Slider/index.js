import PropTypes from 'prop-types';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import './index.scss';

function Slider({ slides }) {
  const [sliderRef] = useKeenSlider();

  return (
    <div ref={sliderRef} className='keen-slider'>
      {slides.map((slide, index) => (
        <div
          key={`slider${index}`}
          className='keen-slider__slide custom-slide1'
        >
          <div className='section'>
            <div className='number' style={{ background: slide.color }}>
              {index + 1}
            </div>
            <div className='title'>{slide.title}</div>
            <div className='description'>{slide.description}</div>
          </div>
          <div
            className='section'
            style={{
              background: slide.color,
              boxShadow: `-2px -2px 8px 0px ${slide.shadowColor}`,
            }}
          >
            <img className='icon' src={slide.icon} />
          </div>
        </div>
      ))}
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      icon: PropTypes.string,
      shadowColor: PropTypes.string,
    })
  ),
};

export default Slider;
