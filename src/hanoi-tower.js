module.exports = function calculateHanoi(disksNumber, turnsPerHour) {
    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = turns * 3600 / turnsPerHour;
    return {
        turns: turns,
        seconds: seconds
    };
}