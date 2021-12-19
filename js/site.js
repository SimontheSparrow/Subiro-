//get values
function getValues() {

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert("Enter integers");
    }
}

// generate numbers
function generateNumbers(sValue, eValue) {

    let numbers = [];

    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);

    }
    return numbers;
}

// display numbers and make even bold
function displayNumbers(numbers) {
    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if (number % 2 === 0) {
            templateRows += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRows += `<tr><td>${number}</td></tr>`;
        }

        document.getElementById("results").innerHTML = templateRows;

    }
}

