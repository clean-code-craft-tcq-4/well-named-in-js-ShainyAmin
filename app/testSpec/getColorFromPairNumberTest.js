const {MajorColorNames , MinorColorNames, ColorPair} = require( './../colorCoder');
const getPairNumberFromColor = require('./../getPairNumberFromColor');
const getColorFromPairNumber = require('./../getColorFromPairNumber');

function getColorFromPairNumberTest(){
    pairNumber = 4;
    let testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "BROWN");

    pairNumber = 5;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "SLATEGRAY");
     
    pairNumber = 23;
    testPair1 = getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "RED");
    console.assert(testPair1.minorColor == "GREEN");
}
    
getColorFromPairNumberTest();