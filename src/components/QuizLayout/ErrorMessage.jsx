const ErrorMessage = (props) => {

    const { error } = props;

    return (
        <>
            <p>There is an error: {error.message}</p>
            <p>Please try again...</p>
        </>
    );

}

export default ErrorMessage;