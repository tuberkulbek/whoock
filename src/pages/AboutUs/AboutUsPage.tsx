import AboutUs from "../../components/AboutUs/AboutUs"

const AboutUsPage: React.FC<{about: React.RefObject<HTMLDivElement>}> = ({about}) => {
    return (
        <div className="section" ref={about}>
            <AboutUs/>
        </div>
    )
}

export default AboutUsPage