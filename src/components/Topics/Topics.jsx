import { topics } from '../../constants/topics';
import Topic from "./Topic";

const Topics = () => {

    return (
        <>
            <h1 className="Heading">Let's play!</h1>
            <h2 className="MiniHeading">Choose a quiz topic:</h2>
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