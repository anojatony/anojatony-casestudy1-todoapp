let user=document.getElementById("user");
let pwd = document.getElementById("pwd");
let error=document.getElementById("error");
let pwderror=document.getElementById("pwderror");
let checkbox=document.getElementById("checkbox");

    function validate(){
        // username  // password
        if((user.value.trim() =="") || (pwd.value.trim() =="")){
         alert("Please enter your login details");
         return false;
        }
        else if(user.value != "admin"){
            error.innerHTML="Invalid username! Please try again";
            return false;
        }
        else if(pwd.value != 12345){
            error.innerHTML="Invalid password! Please try again";
            return false;
        }
        else if(checkbox.checked == false){
            alert("Please Confirm");
           return false;
        }
        else{
            error.innerHTML="";
            pwderror.innerHTML="";
            return true;
        }
    }
      function redirect(callback){
          return callback();

      }
     function confirm(){
         return redirect(validate);
     }