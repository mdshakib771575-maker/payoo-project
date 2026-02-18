const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function () {
    //  logic
    // 1. get number
    // 2. get pin
    // 3. mach number & pin 
    // 3-1. true > Home page 
    // 3-1. false < return

      // 1. get number
    const inputNumber  = document.getElementById('input-number');
    const contacNumber = inputNumber.value;
    console.log(contacNumber);

  // 2. get pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value; 
     console.log(pin);

      // 3. mach number & pin 

      if(contacNumber == '01883307247' && pin == '1234' ){
        // 3-1. true > Home page 
        alert('Login success')
        // window.location.replace('/home.html');
        window.location.assign('/home.html');
      }else{
         // 3-1. false < return
        alert('Login Faild')
        return;
      }
})