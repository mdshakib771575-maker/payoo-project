function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value)
    return value;
}
function getBalance(){
     const balanceele = document.getElementById('balance')
   const balance = balanceele.innerText;
   console.log(Number(balance))
   return Number(balance);
}

function setbalance(value){
     const balanceele = document.getElementById('balance');
     balanceele.innerText  = value
};

function showOnly(id){
     const addMoney = document.getElementById('add-money');
     const cashout = document.getElementById('cashout');
     const history = document.getElementById('history')

     addMoney.classList.add('hidden');
     cashout.classList.add('hidden');
     history.classList.add('hidden')

     const show = document.getElementById(id);
     show.classList.remove('hidden');
}