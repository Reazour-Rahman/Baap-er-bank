function getInput(id) {
    const input = parseFloat(document.getElementById(id).value);
    document.getElementById(id).value = '';
    return input;
};
// set on it's location
function updateTotal (fieldId, amount ){
    const previousAmount = parseFloat(document.getElementById(fieldId).innerText);
    document.getElementById(fieldId).innerText = previousAmount + amount;
} 
// updateBalance
function updateBalance(amount) {
    const balance  =  document.getElementById('balance-money');
    const balanceInText = balance.innerText;
    const previousBalance  = parseFloat(balanceInText);
    const newBalance = balance.innerText = previousBalance + amount;
};
// deposit btn
document.getElementById('deposit-btn').addEventListener('click',
function(){
    const amount = getInput('deposit-text');
    if (amount > 0) {
        updateTotal ('depositing-money', amount);
        updateBalance (amount);
    }
});
// withdraw btn
document.getElementById('withdraw-btn').addEventListener('click',
function(){
    const amount = getInput('withdraw-text');
    if (amount > 0 && amount <= 1240) {
        updateTotal ('withdraw-money', amount);
        updateBalance (parseInt(-amount));
    }
})