/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numOfDays = 0;
const calcCost = document.getElementById("calculated-cost");
const clearBtn = document.getElementById("clear-button");
const fullBtn = document.getElementById("full");
const halfBtn = document.getElementById("half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


const listItems = document.querySelectorAll("ul.day-selector li");

listItems.forEach(function(item){ 
    item.addEventListener("click", function () { 
        if (!item.classList.contains("clicked")) { 
            item.classList.add("clicked");
            numOfDays++;
            calculateTotalCost();
        }
    });
    // console.log(listItems)
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


function removeClass(htmlTag) { 
    htmlTag.classList.remove("clicked");
}

clearBtn.addEventListener("click", function() { 
    document.querySelectorAll("ul.day-selector li").forEach(removeClass);
    numOfDays = 0;
    calcCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfBtn.addEventListener("click", function() {
	costPerDay = 20;
    calculateTotalCost();
	halfBtn.classList.add("clicked");
	fullBtn.classList.remove("clicked");
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullBtn.addEventListener("click", function () {
	costPerDay = 35;
    calculateTotalCost();
    halfBtn.classList.remove("clicked");
	fullBtn.classList.add("clicked");
    
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() { 
    let total = costPerDay * numOfDays;
    calcCost.innerHTML = total;
}

