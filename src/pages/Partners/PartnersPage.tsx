import Partners from "../../components/Partners/Partners"

const PartnersPage: React.FC<{partners: React.RefObject<HTMLDivElement>}> = ({partners}) => {
    return (
        <div className='section' ref={partners}>
            <Partners />
        </div>
    )
}

export default PartnersPage