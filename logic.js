let totalIncome = document.getElementById('gross-annual-income');
let extraIncome = document.getElementById('extra-income');
let ageGroupSelect = document.getElementById('age-group');
let deductions = document.getElementById('deductions');
let button = document.getElementById('submit-btn');
let msgContainer=document.querySelector(".msg-container");
let msg = document.getElementById('msg');
let box = document.querySelector('.form')
let rstBtn = document.getElementById('rst-btn');
function myfunc() {
    
    // console.log("Net Worth:", networth); // Debugging statement
    let incomeTotal= totalIncome.value + extraIncome.value - deductions.value;
    let tax = 0;
    let ageGroup = (ageGroupSelect.value);

    if (incomeTotal <= 800000) {
        // No tax
        tax = 0;
    } else {
        let taxableAmount = incomeTotal - 800000;
        let taxRate = 0;

        if (ageGroup === "0-39") {
            taxRate = 0.3;
        } else if (ageGroup === "40-60") {
            taxRate = 0.4;
        } else {
            taxRate = 0.1;
        }

        tax = taxableAmount * taxRate;
    }

    msg.innerText=`your overall income will be  ${tax}`;
    msgContainer.classList.remove("hide");
    box.classList.add("hide");
    
}

button.addEventListener("click", () => {
    console.log("Button clicked"); // Debugging statement
    myfunc();
});
rstBtn.addEventListener("click",()=>{
box.classList.remove("hide");
msgContainer.classList.add("hide");
});
