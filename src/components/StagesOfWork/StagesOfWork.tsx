import './StagesOfWork.css';
// @ts-ignore
import { ReactComponent as ArrowRight } from '../../assets/ico/arrow-right.svg'
// @ts-ignore
import { ReactComponent as Done } from '../../assets/ico/done.svg'

const StagesOfWork:React.FC = () => {
    return (
        <div className="container">
            <div className="stages__wrapper">
                <div className="stages__item">
                    <h3 className="rainbow">Stages of work</h3>
                </div>
                <div className="stages__item">
                    <p className="stages__item-title">1Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="stages__item-description">Lorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce.Lorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce.</p>
                    <ArrowRight className = ""/>
                </div>
                <div className="stages__item">
                    <p className="stages__item-title">2Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="stages__item-description">Lorem dfasdfasdfasfa.</p>
                    <ArrowRight />
                </div>
                <div className="stages__item">
                    <p className="stages__item-title">3Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="stages__item-description">Lorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce.</p>
                    <ArrowRight />
                </div>
                <div className="stages__item">
                    <p className="stages__item-title">4Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="stages__item-description">Lorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectusLorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce. turpis fusce.</p>
                    <ArrowRight />
                </div>
                <div className="stages__item">
                    <p className="stages__item-title">5Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="stages__item-description">Lorem irius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce.</p>
                    <ArrowRight />
                </div>
                <div className="stages__item">
                    <p className="stages__item-title">6Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="stages__item-description">Lorem ipsum dolor sit amet consectetur. Maecenas tempus leo convallis cras eros nam nunc ac. Pellentesque non quis imperdiet vitae varius dignissim. Est et tellus non amet sit eleifend quis morbi ultrices. Phasellus semper mauris senectus turpis fusce.</p>
                    <Done/>
                </div>
                <div className="stages__item">
                </div>
        </div>
      </div>
    )
}

export default StagesOfWork