// function foo(){

//     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var passwordLength =17;
//     var password = "";
       
//     for (var i = 0; i <= passwordLength; i++) {
//       var randomNumber = Math.floor(Math.random() * chars.length);
//       password += chars.substring(randomNumber, randomNumber +1);
//      }
      
//       return password
//     }
//     let x=foo()
//     console.log(x)


var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 17;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");  
}