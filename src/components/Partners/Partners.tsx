//@ts-ignore
import apple from '../../assets/apple.png'
//@ts-ignore
import microsoft from '../../assets/microsoft.png'
//@ts-ignore
import tesla from '../../assets/tesla.png'
//@ts-ignore
import openai from '../../assets/openai.png'

import './Partners.css'

const Partners: React.FC = () => {
    return (
        <div className="container">
            <h3 className="rainbow ">Partners</h3>
            <div className="partners__wrapper">
                <img src={apple} alt="" className="partners__logo"/>
                <img src={microsoft} alt="" className="partners__logo"/>
                <img src={tesla} alt="" className="partners__logo"/>
                <img src={openai} alt="" className="partners__logo"/>
            </div>
        </div>
    )
}

export default Partners