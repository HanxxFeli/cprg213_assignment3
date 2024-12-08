// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitBtn = document.getElementById("submit-button");

function clickHandler() { 
    let contactPg = document.getElementById("contact-page");
    const endMsg = "<p> Thank you for your message! </p>";

    contactPg.innerHTML = endMsg;
    contactPg.style.fontSize = "24px";
    contactPg.style.textAlign = "center";
}

submitBtn.addEventListener("click", clickHandler);

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

