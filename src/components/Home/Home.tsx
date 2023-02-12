//@ts-ignore
import homeImage from "../../assets/3d.png"
import { Button } from "../Common/Button/Button"
import "./Home.css"

const Home: React.FC = () => {
    return (
        <div className='container'>
            <div className="home-wrapper">
                <div className="home_item-wrapper">
                    <div className="home__item-slogan">
                        It’s not magic. This is
                        <div className="ml-1 rainbow">Whoock!</div>
                    </div>
                    <div className="home__item-about">
                        We build a product that builds products the world has never seen.
                    </div>
                    <Button>
                        Start creating
                    </Button>
                </div>
                <img src={homeImage}/>
            </div>
        </div>
    )
}

export default Home