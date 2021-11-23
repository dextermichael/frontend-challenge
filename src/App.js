import Slider from './components/Slider';
import './App.scss';

const Slides = [
  {
    color:
      'linear-gradient(90deg, rgba(159,26,213,1) 0%, rgba(29,121,214,1) 52%, rgba(0,212,255,1) 100%)',
    title: 'Gradients',
    description: 'Start, end, angle',
    shadowColor: 'rgba(29,121,214,1)',
    icon: '3.png',
  },
  {
    color:
      'linear-gradient(90deg, rgba(83,213,26,1) 0%, rgba(214,153,29,1) 100%, rgba(255,205,0,1) 100%)',
    title: 'Presets',
    description: 'Manage presets',
    shadowColor: 'rgba(214,153,29,1)',
    icon: '1.png',
  },
  {
    color:
      'linear-gradient(90deg, rgba(213,211,26,1) 0%, rgba(213,160,29,1) 0%, rgba(213,41,29,1) 100%, rgba(214,153,29,1) 100%, rgba(255,205,0,1) 100%)',
    title: 'Colors',
    description: 'Pick any color',
    shadowColor: 'rgba(214,153,29,1)',
    icon: '2.png',
  },
];

function App() {
  return (
    <div className='App'>
      <Slider slides={Slides} />
    </div>
  );
}

export default App;
