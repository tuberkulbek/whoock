import { refTypes } from "../../app/commonTypes"
//@ts-ignore
import logo from "../../assets/Logo.png"
import { Button } from "../Common/Button/Button"
import './Header.css'

const Header: React.FC<refTypes> = ({ home, about, stages, partners, contacts }) => {
    const scrollToSection = (ref:React.RefObject<HTMLDivElement>) => {
        window.scrollTo({
            top: ref.current?.offsetTop,
            behavior: "smooth"
        })
    }
    
    return (
        <div className="header">
            <img src={logo} />
            <div className="navigation_bar">
                <button onClick={()=> scrollToSection(home)} className="button">
                    Home
                </button>
                <button onClick={()=> scrollToSection(about)} className="button">
                    About us
                </button>
                <button onClick={()=> scrollToSection(stages)} className="button">
                    Stages
                </button>
                <button onClick={()=> scrollToSection(partners)} className="button">
                    Partners
                </button>
                <button onClick={()=> scrollToSection(contacts)} className="button">
                    Contacts
                </button>
            </div>
            <div className="login_bar">
                <div>
                    Log in
                </div>
                <Button>
                    Register
                </Button>
            </div>
        </div>
    )
}

export default Header