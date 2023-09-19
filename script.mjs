/* Imports */
import {html} from "./modules/html.mjs";


/* Module */
const root = document.getElementById("root");


/* View */
function renderPage () {

    //Set html
    root.innerHTML = html;

    //Define variables
    const numberAndOperators = document.querySelectorAll(".number-or-operator");
    const screenDisplay = document.getElementById("screen-display");
    const eraseAllBtn = document.querySelector(".erase-all-btn");
    const eraseBtns = document.querySelectorAll(".erase-btn");
    const calculateBtn = document.querySelector(".equal-btn");
    let calcDataArray = [];
    let isEqualClicked = false;
    let isDecimalMax = false;

    /* Displaying text and storing calcdata from number and operator btns */
    numberAndOperators.forEach(numberAndOperator => {
        numberAndOperator.addEventListener("click", () => {

            //Erase previous data
            if(isEqualClicked === true) screenDisplay.textContent = "", calcDataArray = [], isEqualClicked = false;            

            //Numb of operators entered
            let numbOfOperators = 0;
            for(let i = 0; i < screenDisplay.textContent.length; i++) {
                if(isNaN(screenDisplay.textContent[i]) && screenDisplay.textContent[i] !== ".") numbOfOperators++
            }

            //If less than 1 operator, we display text at screen and store calcdata
            //If 1 operator, but btn is not an operator and "√" or "x2" is not present we allow displaying and storing
            if(numbOfOperators < 1 || (!numberAndOperator.classList.contains("operator") && !screenDisplay.textContent.includes("√") && !screenDisplay.textContent.includes("x2"))) {
              //If screen at "0" and we try to enter operator, we don't display text or store data
              if(screenDisplay.textContent === "0" && numberAndOperator.classList.contains("operator")) {
                  screenDisplay.textContent = screenDisplay.textContent;
              }
              //Logic for decimal button
              else if(numberAndOperator.textContent === ".") {
                //If decimal is not entered we allow it to be displayed at screen
                if(screenDisplay.textContent !== "0" && !screenDisplay.textContent.includes(".")) {
                    screenDisplay.textContent += numberAndOperator.textContent;
                }
                //If there is 1 operator present we allow a second decimal
                else if(numbOfOperators === 1 && isDecimalMax === false) {
                    screenDisplay.textContent += numberAndOperator.textContent;
                    isDecimalMax = true;
                }
              }
              //At all other cases we display text at screen and store calcdata
              else {
                  let btnText = numberAndOperator.textContent;
                  calcDataArray.push(numberAndOperator.dataset.calcdata);
                  screenDisplay.textContent === "0"? screenDisplay.textContent = btnText: screenDisplay.textContent += btnText; 
              }
            }
        })
    })

    //Calculate btn - Calculating content of calcDataArray
    calculateBtn.addEventListener("click", () => {
        let calcData = calcDataArray.join("");
        let newCalcData = calcData;
        if(calcData.includes("√")) newCalcData = Math.sqrt(calcData.slice(0, calcData.length - 1));
        if(calcData.includes("%")) newCalcData = `(${calcData.replace("%", "/")} * 100)`;
        screenDisplay.textContent = eval(newCalcData).toFixed(2);
        isEqualClicked = true;
    });

    //Erase all btn (CE)
    eraseAllBtn.addEventListener("click", () => screenDisplay.textContent = "0", calcDataArray = []);

    //Go back one btns (C) and (<<)
    eraseBtns.forEach(eraseBtn => {
        eraseBtn.addEventListener("click", () => {
            screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
            if(screenDisplay.textContent === "") screenDisplay.textContent = "0";
            calcDataArray.pop();
        });
    })
}


/* Controller */
renderPage();