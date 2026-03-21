const addMoneyBtn = document.getElementById('add-money-btn');
addMoneyBtn.addEventListener('click',function(){
    //1-bank account get
    const addBank = getValueFromInput('add-money-bank');
    if(addBank == 'seclet a Bank'){
        alert('please Seclet a Bank')
        return;
    };
    //2 - get bank account number
        const accno = getValueFromInput('add-mony-number');
        if(accno.length !==11){
            alert('invalid bank account number');
            return;
        };
        //get amount
        const amount = getValueFromInput('add-money-amount')
       const balance = getBalance()
        const newbalance = balance  + Number(amount);
        console.log(newbalance);

        const Pin = getValueFromInput("add-money-pin");
        if(Pin === "1234"){
            alert(` Add money ${amount}Tk  sucessful from ${addBank}. ${Date()}`);
            setbalance(newbalance)
            
           // 1. get transfar div
           const history= document.getElementById('history-container');
           //2 create div 
           const createdivNewHistory = document.createElement('div')
         
           createdivNewHistory.innerHTML = `
            <div class="transation-card p-5 bg-base-100">
             Add money ${amount}Tk  sucessful from ${addBank}. acc no- ${accno} 
             at ${Date()}
            </div>
           `;
             //apped 
           history.append(createdivNewHistory); 

        }else{
            alert('invalid pin')
        };
})