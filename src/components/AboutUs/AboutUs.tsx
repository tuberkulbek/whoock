import './AboutUs.css';
//@ts-ignore
import laptop from "../../assets/laptop 1.png"
import { Button } from '../Common/Button/Button';

const AboutUs:React.FC = () => {
    return (
      <div className="container aboutUs_container">
        <div className='aboutUs_left'>
          <div className='rainbow'>AboutUs</div>
          <div className='aboutUs_item-wrapper'>
            <div className='aboutUs_item-title'>What are we?</div>
            <div className='aboutUs_item-description'>Lorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce.</div>
            <Button>
              Download the presentation
            </Button>
            <div className='aboutUs_item-button'>For prospective investors</div>
          </div>
        </div>
        <img src={laptop} alt="" />
      </div>
    )
}

export default AboutUs