document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    let newDepositAmount = depositField.value;
    // console.log(newDepositAmount);

    const depositTotalElement = document.getElementById('deposit-total');
    let previousDepositTotal = depositTotalElement.innerText;

    depositField.value = ''

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    // console.log(previousBalanceTotal);

    if (newDepositAmount >= 0) {

        const currentDepositAmount = parseInt(previousDepositTotal) + parseInt(newDepositAmount);
        // console.log(typeof currentDepositAmount);

        depositTotalElement.innerText = currentDepositAmount;
        const currntTotalBalance = parseInt(previousBalanceTotal) + parseInt(newDepositAmount)
        balanceTotal.innerText = currntTotalBalance;
    }
    else {
        // alert('please enter a positive amount')
        const positiveAmount = document.getElementById('positive-amount')
        positiveAmount.style.display = 'block'
    }


})


document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = document.getElementById('withdraw-field')
    const newwithdrawAmount = withdrawAmount.value;
    console.log(newwithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previouswithdrawTotal = withdrawTotalElement.innerText;
    console.log(previouswithdrawTotal);

    withdrawAmount.value = '';

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;

    if (newwithdrawAmount >= 0) {
        if (newwithdrawAmount <= previousBalanceTotal) {
            const currentWithdrawAmount = parseInt(newwithdrawAmount) + parseInt(previouswithdrawTotal)
            withdrawTotalElement.innerText = currentWithdrawAmount;

            const currentBalanceTotal = parseInt(previousBalanceTotal) - parseInt(newwithdrawAmount);
            balanceTotal.innerText = currentBalanceTotal;

        }
        else {
            //    alert('not enough balance')
            const balanceNotEnough = document.getElementById('balance-not-enough')
            balanceNotEnough.style.display = 'block';
        }
    }
    else {
        // alert('please provide a positive amount')
        const positiveAmount = document.getElementById('positive-amount-withdraw')
        positiveAmount.style.display = 'block'
    }
})