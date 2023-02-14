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
                return { type, value: prompt(inputTitleforMatch, cricObj.matches) };
            case "runs":
                return { type, value: prompt(inputTitleforRun, cricObj.runs) };
            case "hundreds":
                return { type, value: prompt(inputTitleforHundred, cricObj.hundreds) };
            default:
                return { type, value: null };
        }
    }
}

console.log(cricObj);

matchChangeInputObj = cricObj.promptFunction("matches");
cricObj.changeProperty(
    matchChangeInputObj.type, 
    (matchChangeInputObj.value === null) ? cricObj.matches : matchChangeInputObj.value
);

console.log(cricObj);

runChangeInputObj = cricObj.promptFunction("runs");
cricObj.changeProperty(
    runChangeInputObj.type, 
    (runChangeInputObj.value === null) ? cricObj.matches : runChangeInputObj.value
);

console.log(cricObj);

hundredChangeInputObj = cricObj.promptFunction("hundreds");;
cricObj.changeProperty(
    hundredChangeInputObj.type,
    (hundredChangeInputObj.value === null) ? cricObj.hundreds : hundredChangeInputObj.value
);

console.log(cricObj);