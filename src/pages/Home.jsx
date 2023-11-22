import 'react-awesome-slider/dist/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import lamina from "../assets/lamina.png"
export default function Home(){
    const sliderStyles = {
        'height':'auto'
    }

    return (
        <div className='mt-24 h-100'>
              <AwesomeSlider style = {sliderStyles}>

                <div data-src={lamina}>2</div>
                
            </AwesomeSlider>
        </div>
    )
}