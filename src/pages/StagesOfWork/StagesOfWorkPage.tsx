import StagesOfWork from "../../components/StagesOfWork/StagesOfWork"

const StagesOfWorkPage: React.FC<{stages: React.RefObject<HTMLDivElement>}> = ({stages}) => {
    return (
        <div className="section" ref={stages}>
            <StagesOfWork/>
        </div>
    )
}

export default StagesOfWorkPage