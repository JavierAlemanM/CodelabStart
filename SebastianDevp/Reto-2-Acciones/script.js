const inputCardName = document.getElementById("inputCardOwner").focus()

function updateCardNumber() {
    const inputCardNumber = document.getElementById("inputCardNumber").value;
    const formattedNumber = inputCardNumber.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim(); 
    document.getElementById("inputCardNumber").value = formattedNumber;
    document.getElementById("cardNumber").textContent = formattedNumber || "#### #### #### ####"; 
}

function updateCardOwner() {
    const inputCardName = document.getElementById("inputCardOwner").value;
    document.getElementById("cardOwner").textContent = inputCardName || "NOMBRE TITULAR"; 
}

function updateCardExpiry() {
    const inputCardExpiry = document.getElementById("inputCardExpiry").value;
    const formattedExpiry = inputCardExpiry.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
    document.getElementById("inputCardExpiry").value = formattedExpiry
    document.getElementById("cardExpiry").textContent = formattedExpiry || "MM/AA"; 
}
