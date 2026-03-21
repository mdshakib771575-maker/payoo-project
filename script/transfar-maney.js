
const transfarBtn = document.getElementById('transfar-btn')
transfarBtn.addEventListener('click',function(){


const transfarNumber = getValueFromInput('transfar-number');
     if(transfarNumber.length !=11){
       alert('invalid Agent Number')
      }
      
      //2.get the amount
      const transfarAmount = getValueFromInput('transfar-amount');
     
      // 3.get the current balance
     const balance = getBalance()
    console.log(balance)

      //4 Calculate Balance 
      const newbalnce =  balance - Number(transfarAmount)
      if(newbalnce<0){
        alert('invalid Balance');
        return;
      }
      const pin  = getValueFromInput('transfar-pin');
       if(pin === "1234"){
        alert('Payment sucssful')
           setbalance(newbalnce)
      }else{
        alert('invalid Pin')
        return;
      }
      })
