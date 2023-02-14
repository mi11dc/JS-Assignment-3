var matchChangeInputObj;
var runChangeInputObj;
var hundredChangeInputObj;

let inputTitleforMatch = "Please change player's matches ...";
let inputTitleforRun = "Please change player's runs ...";
let inputTitleforHundred = "Please change player's hundereds ...";

let cricObj = {
    name: "Dhaval",
    matches: "10",
    runs: "800",
    hundreds: "5",

    changeProperty(key, value) {
        this[key] = value;
    },

    // Aditional function
    promptFunction(type) {
        switch(type) {
            case "matches":
                let matches = prompt(inputTitleforMatch, cricObj.matches);
                cricObj.changeProperty(type, (matches === null) ? cricObj.matches : matches);
                break;
            case "runs":
                let runs = prompt(inputTitleforRun, cricObj.runs);
                cricObj.changeProperty(type, (runs === null) ? cricObj.runs : runs);
                break;
            case "hundreds":
                let hundreds = prompt(inputTitleforHundred, cricObj.hundreds);
                cricObj.changeProperty(type, (hundreds === null) ? cricObj.hundreds : hundreds);
                break;
            default:
                break;
        }
        console.log(cricObj);
    }
}

console.log(cricObj);

matchChangeInputObj = cricObj.promptFunction("matches");

runChangeInputObj = cricObj.promptFunction("runs");

hundredChangeInputObj = cricObj.promptFunction("hundreds");