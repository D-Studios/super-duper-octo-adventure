import constants from './GlobalConstants';


const formatInputBox = (text, length, symbol, symbolFirstPos, symbolSecondPos) => {
    // Get only the digits entered.
    const formattedText = text.replace(constants.ONLY_DIGITS, constants.EMPTY_STRING);
    let formattedOutput = constants.EMPTY_STRING;

    // Loop through all the digits, adding symbols where appropriate.
    for (let i = 0; i < formattedText.length && i < length; i++) {
      if (i === symbolFirstPos || i === symbolSecondPos) {
        formattedOutput += symbol;
      }
      formattedOutput += formattedText[i];
    }
    return formattedOutput;
  };

export default formatInputBox;