import { topics } from '../../constants/topics';
import Topic from "./Topic";

const Topics = () => {

    return (
        <>
            <h1 className="Heading">Choose a quiz topic:</h1>
            <div className="Topics">
                {
                    topics.map((topic, i) => (
                        <Topic key={i} topic={topic} />
                    ))
                }
            </div>
        </>
    );

}

export default Topics;