const {MajorColorNames , MinorColorNames, ColorPair} = require( './../colorCoder');
const getPairNumberFromColor = require('./../getPairNumberFromColor');

function getColorFromPairNumberTest()
{
let testPair2 = new ColorPair();
testPair2.majorColor="YELLOW";
testPair2. minorColor ="GREEN";
pairNumber =getPairNumberFromColor(testPair2);
console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
console.assert(pairNumber==18);

testPair2 = new ColorPair();
testPair2.majorColor="RED";
testPair2. minorColor ="BLUE";
pairNumber =getPairNumberFromColor(testPair2);
console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
console.assert(pairNumber==6);
}
getColorFromPairNumberTest();