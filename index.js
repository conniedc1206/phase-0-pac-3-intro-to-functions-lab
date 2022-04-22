function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    //if the string that is passed into the function is all lowercase. return "I can't hear you!"
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
    //if the string that is passed into the function is all uppercase, the function should return "YES INDEED!"
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }   
    //if the string that is passed into the function is equal to "Let's have dinner together!", the function should return "I would love to!"
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}