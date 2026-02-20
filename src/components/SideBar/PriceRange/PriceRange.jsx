import Slider from '@mui/material/Slider';
import './PriceRange.css'
import {useState} from 'react'


const PriceRange = () => {

    const [price, setPrice] = useState([1920, 4500])
    const changePrice = (event, newValue) => {
        setPrice(newValue)
    }

    const marks = [
  {
    value: 1920,
    label: '1920',
  },
  {
    value: 4500,
    label: '4500',
  },
  {
    value: 7000,
    label: '7000',
  }
];

  return (
    <div className='price_range'>
      <h3 className='price_text'>Стоимость</h3>
      <div className='direction_text'>
        <span className='from'>от</span>
        <span className='to'>до</span>
      </div>
      <Slider className="price" 
        // aria-label="Always visible"
        defaultValue={80}
        // getAriaValueText={valuetext}
        step={10}
        marks={marks}
        min={1920}
        middle={4500}
        max={7000}
        // valueLabelDisplay="on"
        valueLabelDisplay="auto"
        value={price}
        onChange={changePrice}
      />
    </div>
  );
};

export default PriceRange;
