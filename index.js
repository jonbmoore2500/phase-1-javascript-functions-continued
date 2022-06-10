// code your solution here

function saturdayFun(activitySat = 'roller-skate') {
    return `This Saturday, I want to ${activitySat}!`;
}

function mondayWork(activityMon = 'go to the office') {
    return `This Monday, I will ${activityMon}.`;
}

function wrapAdjective(flair = '*') {
    return function(someVariable = 'special') {
        return `You are ${flair}${someVariable}${flair}!`
    }
};


const encouragingPromptFunction = wrapAdjective('!!!');