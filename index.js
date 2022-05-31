function shout(string){
    return string.toUpperCase()
}
function whisper(string){
    return string.toLowerCase()
}
function logShout(string){
    console.log(string.toUpperCase())
}
function logWhisper (string){
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){
    /*if (string.toLowerCase){
        return "I can't hear you!";
    }
    else if (string.toUpperCase){
        return "YES INDEED!";
    }*/
    switch(string){
        case string.toLowerCase():
            return "I can't hear you!";
        case string.toUpperCase():
            return "YES INDEED!";
        default:
            return "I would love to!";
    }
}