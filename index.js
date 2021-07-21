function distanceFromHqInBlocks(blocks) {
    let calcBlocks = (Math.abs (blocks - 42));
    return calcBlocks;
}
function distanceFromHqInFeet(blocks) {
    let calcBlocks = (Math.abs (blocks - 42));
    let calcFeet = (calcBlocks * 264)
    return calcFeet;    
}
function distanceTravelledInFeet(a, b) {
    let travelFeet = (Math.abs (a - b)* 264);
    return travelFeet;
}
function calculatesFarePrice(a, b) {
    let farePrice = distanceTravelledInFeet (a, b)
        if (farePrice < 400) {
            return 0;
        } else if (farePrice > 400 && farePrice < 2000) {
            return (farePrice - 400) * 0.02;
        } else if (farePrice > 2001 && farePrice < 2500) {
            return 25;
        } else if (farePrice > 2500) {
            return 'cannot travel that far'
        }

}




