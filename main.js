var inputInitial = document.querySelector("#input-initial");
var inputQuantity = document.querySelector("#input-quantity");
var inputCurrent = document.querySelector("#input-current");
var btnCalculate = document.querySelector("#btn-calculate");
var outputBox = document.querySelector("#output-box");

function showMessage(message) {
    outputBox.innerText = message;
}

function calculateProfitOrLoss(initial, quantity, current) {
    if (initial != "" && quantity != "" && current != "") {
        if (initial > current) {
            //loss
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / (initial * quantity)) * 100;

            showMessage(`You have incurred a loss of ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}%.`);

            outputBox.style.border = "solid 5px var(--error-primary)";
            outputBox.style.backgroundColor = "var(--error-secondary)";
            outputBox.style.color = "var(--error-primary)";


        } else if (initial < current) {
            //profit
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit / (initial * quantity)) * 100;

            showMessage(`You have incurred a profit of ${profit} and the profit percentage is ${profitPercentage.toFixed(2)}%.`);

            outputBox.style.border = "solid 5px var(--success-primary)";
            outputBox.style.backgroundColor = "var(--success-secondary)";
            outputBox.style.color = "var(--success-primary)";

        } else {
            showMessage("No pain no gain, no gain no pain");
        }
    } else {
        showMessage("Please Enter All the Fields.");
        outputBox.style.border = "solid 5px var(--dark-gray)";
        outputBox.style.backgroundColor = "white";
    }
}

function clickEventHandler() {
    var initialPrice = Number(inputInitial.value);
    var buyQuantity = Number(inputQuantity.value);
    var currentPrice = Number(inputCurrent.value);

    calculateProfitOrLoss(initialPrice, buyQuantity, currentPrice)
}

btnCalculate.addEventListener("click", clickEventHandler);