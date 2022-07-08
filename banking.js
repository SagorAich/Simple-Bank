//handle deposit button event
document.getElementById('deposit-btn').addEventListener('click',function(){
    //get the amount deposited
    const depositInput=document.getElementById('deposit-amount');
    const depositAmount=depositInput.value;
    console.log(depositAmount);

    //update deposit total
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositAmount=depositTotal.innerText;
    const newDepositTotalText=parseFloat(previousDepositAmount)+parseFloat(depositAmount);
    const newDepositTotal=parseFloat(newDepositTotalText);
    console.log(newDepositTotal);
    depositTotal.innerText=newDepositTotal;

    //update balance total
    const balanceAm=document.getElementById('balance');
    const balanceAmount=balanceAm.innerText;
    console.log(balanceAmount);
    const totalBalanceText=parseFloat(balanceAmount)+ parseFloat(depositAmount);

    //const totalBalance=parseFloat(totalBalanceText);
    console.log(totalBalanceText);
    balanceAm.innerText=totalBalanceText;
    
    //clear the deposit input field
    depositInput.value='';
});

    //handle withdraw event handeler
    document.getElementById('Withdraw-btn').addEventListener('click',function(){
    console.log('withdraw clicked');
    const pleaseWithdrw=document.getElementById('withdraw-amount');
    const pleaseWithdrwValueText=pleaseWithdrw.value;
    const pleaseWithdrwValue=parseFloat(pleaseWithdrwValueText)
    console.log(pleaseWithdrwValue);

    //set withdraw total
    const withdrawTaka=document.getElementById('withdraw-taka');
    const withdrawTakaValueText=withdrawTaka.innerText;
    const withdrawTakaValue=parseFloat(withdrawTakaValueText);
    console.log(withdrawTakaValue);

    const withdrawTotal=pleaseWithdrwValue+withdrawTakaValue;
    withdrawTaka.innerText=withdrawTotal;

    // reduce balance 
    const balanceAm=document.getElementById('balance');
    const balanceAmount=balanceAm.innerText;
    const balanceAmountValue=parseFloat(balanceAmount);

    const netBalance=balanceAmountValue-pleaseWithdrwValue;
    balanceAm.innerText=netBalance;
    
    //clear withdraw input
    pleaseWithdrw.value='';
    });