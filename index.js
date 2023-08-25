

function bmiCalculator(){
    console.log("Button clicked!");
var weight = (document.getElementById('weight').value);
var height =(document.getElementById('height').value);

// Convert weight from lbs to kg (1 lb = 0.453592 kg)
var weightInKg = weight / 2.20462;

// Convert height from cm to m (1 m = 100 cm)
var heightInM = height / 100;
if (weight <= 0 || height <= 0) {
    document.getElementById('error').textContent = "Please enter valid positive numbers!";
    return; // Stop the function if input values are invalid
} else {
    document.getElementById('error').textContent = ""; // Clear any previous error message
}
// Calculate BMI using the formula: BMI = weight (kg) / height (m)^2
var bmi = weightInKg / (heightInM * heightInM);

document.getElementById('result').innerHTML=bmi.toFixed(2); 
document.querySelector("button").innerText = "Calculate Again";
 // Display BMI with two decimal places
 reset();

if (bmi <= 18.4) {
    document.getElementById('Underweight').style.backgroundColor = 'yellow';
    document.getElementById('normal').style.backgroundColor = ''; // Reset color for other rows
    document.getElementById('over').style.backgroundColor = '';
    document.getElementById('obese').style.backgroundColor = '';
} else if (bmi >= 18.5 && bmi <= 24.9) {
   
    document.getElementById('normal').style.backgroundColor = '#4E9F3D';
    document.getElementById('Underweight').style.backgroundColor = '';
    document.getElementById('over').style.backgroundColor = '';
    document.getElementById('obese').style.backgroundColor = '';
} else if (bmi >= 25.0 && bmi <= 39.9) {
    document.getElementById('over').style.backgroundColor = 'orange';
    document.getElementById('Underweight').style.backgroundColor = '';
    document.getElementById('normal').style.backgroundColor = '';
    document.getElementById('obese').style.backgroundColor = '';
} else {
    document.getElementById('obese').style.backgroundColor = 'red';
    document.getElementById('Underweight').style.backgroundColor = '';
    document.getElementById('normal').style.backgroundColor = '';
    document.getElementById('over').style.backgroundColor = '';
}

}
function reset() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    // document.getElementById('result').innerHTML = '';
    // document.getElementById('error').textContent = '';
    // document.getElementById('Underweight').style.backgroundColor = '';
    // document.getElementById('normal').style.backgroundColor = '';
    // document.getElementById('over').style.backgroundColor = '';
    // document.getElementById('obese').style.backgroundColor = '';
}
