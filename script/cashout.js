
const cashoutBtn = document.getElementById('cashout-btn');
cashoutBtn.addEventListener('click',function(){
    // logic
    // 1.get the agent number and validate.
    // 2.get the amount and validate and convert to numvber.
    // 3.get the current balance  and validate and convert to numvber.
    //4.Calculate new balance .
    // 5. get the pin and verify.
    // 5.1 true > show and alert > set balance . 
    //5.2 folse < Error alert < retrn
      

    //smart way//
    //1.get the agent number
     const cashoutNumber = getValueFromInput('cashout-number');
     if(cashoutNumber.length !=11){
       alert('invalid Agent Number')
      }
      
      //2.get the amount
      const cashoutAmount = getValueFromInput('cashout-amount');
     
      // 3.get the current balance
     const balance = getBalance()
    console.log(balance)

      //4 Calculate Balance 
      const newbalnce =  balance - Number(cashoutAmount)
      if(newbalnce<0){
        alert('invalid Balance');
        return;
      }
      const pin  = getValueFromInput('cashout-pin');
       if(pin === "1234"){
        alert('Payment sucssful')
           setbalance(newbalnce)

            // 1. get transfar div
           const history= document.getElementById('history-container');
           //2 create div 
           const createdivNewHistory = document.createElement('div')
         
           createdivNewHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100">
             Cashout ${cashoutAmount}Tk  sucessful from ${cashoutNumber}. 
             at ${Date()}
            </div>
           `;
             //apped 
           history.append(createdivNewHistory); 
      }else{
        alert('invalid Pin')
        return;
      }


 // project way frist.//

// 1.get the agent number
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     if(cashoutNumber.length  != 11){
//         alert('Invalid Agent Number')
//         return;
//     }
//     // console.log(cashoutNumber);
//  //2.get the amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     // console.log(cashoutAmount);

// // 3.get the current balance
//     const balanceele = document.getElementById('balance')
//    const balance = balanceele.innerText;

//  //4.Calculate new balance .
//     const newbalance = Number(balance)-Number(cashoutAmount);
//     // if(Number(cashoutAmount) > Number(balance) ){
//     //     alert('invalid amaount')
//     //     return;
//     // }else{
        
//     //     console.log(newbalance);
//     // }
//     if(newbalance < 0){
//         alert('invaid balance')
//         return;
//     }
//     //  console.log(newbalance);
//    // 5. get the pin and verify.
//    const cashoutPinInput = document.getElementById('cashout-pin');
//    const cashoutPin = cashoutPinInput.value;

//    if(cashoutPin =='1234'){
//     // 5.1 true > show and alert > set balance . 
//     alert('cashout sucessfull')
//     console.log(newbalance)
//     balanceele.innerText = newbalance;
// }else{
//        //5.2 folse < Error alert < retrn
//     alert('invalid Pin')
//     return;
// }
// console.log(cashoutPin)



})