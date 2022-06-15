const {MajorColorNames , MinorColorNames, ColorPair} = require( './colorCoder');
const getColorFromPairNumber = require('./getColorFromPairNumber');


function printColorPairManual() 
{
    console.log("Pair No.\t\t Major Color \t\t Minor Color");
    for(var pairNumber = 1; pairNumber <= MajorColorNames.length * MinorColorNames.length; pairNumber++ )
    {
        var colorPair = new ColorPair();
         colorPair = getColorFromPairNumber(pairNumber)
        console.log(pairNumber+"\t\t"+ colorPair.majorColor+"\t\t"+colorPair.minorColor )

    }


}
printColorPairManual();