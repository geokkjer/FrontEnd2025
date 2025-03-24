class Concatenator< T > {
    concatenateArray(inputArray: Array< T >): string{
        var returnString = "";

        for (var i = 0; i < inputArray.length; i++){
            if (i > 0){
                returnString += ",";
            }
            returnString += inputArray[i].toString();
        }
        return returnString
    }
}