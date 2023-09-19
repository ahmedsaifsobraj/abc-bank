// deposit amount section

function getInput(InputId) {
    const getInputInfo = document.getElementById(InputId);
    const newInputText = getInputInfo.value;
    const newInputAmount = parseFloat(newInputText);
    getInputInfo.value = " ";
    return newInputAmount;
}

function getInputTotal(dipositDisplayId, newInputAmount) {
    const getPreviousInput = document.getElementById(dipositDisplayId);
    const previousInputText = getPreviousInput.innerText;
    const previousInputAmount = parseFloat(previousInputText);
    const totalInput = previousInputAmount + newInputAmount;
    getPreviousInput.innerText = totalInput;
    return totalInput;
}
function getCurrentBalance() {
    const balanceInfo = document.getElementById('balance-total');
    const balanceInfoText = balanceInfo.innerText;
    const balanceInfoAmount = parseFloat(balanceInfoText);
    return balanceInfoAmount;
}
function getBalanceUpdate(newInputAmount, isAdd) {
    const balanceInfo = document.getElementById('balance-total');
    const balanceInfoAmount = getCurrentBalance();
    if (isAdd == true) {
        const newBalance = balanceInfoAmount + newInputAmount;
        balanceInfo.innerText = newBalance;
    }
    else {
        const newBalance = balanceInfoAmount - newInputAmount;
        balanceInfo.innerText = newBalance;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDepositAmount = getInput('deposit-info');
    if (newDepositAmount > 0) {
        getInputTotal('deposit-total', newDepositAmount);
        getBalanceUpdate(newDepositAmount, true);
    }
})
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const newWithdrawAmount = getInput('withdraw-info');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        getInputTotal('withdraw-total', newWithdrawAmount);
        getBalanceUpdate(newWithdrawAmount, false);
    }
})