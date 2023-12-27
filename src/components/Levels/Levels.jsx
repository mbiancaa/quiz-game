import { levels } from '../../constants/levels';
import Level from "./Level";

const Levels = () => {

    return (
        <>
            <h1 className="Heading">Choose a level:</h1>
            <div className="Levels">
                {
                    levels.map((level, i) => (
                        <Level key={i} level={level} />
                    ))
                }
            </div>
        </>
    );

}

export default Levels;