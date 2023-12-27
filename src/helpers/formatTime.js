export const formatTime = (time) => {

    if (isNaN(time) || time < 0) {
        alert( 'There is an issue with timer' );
    }

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (hours) {
        return `${hours}:${minutes}:${seconds}h`
    } else if (minutes) {
        return `${minutes}:${seconds}m`
    }
    return `${seconds} seconds`;

}