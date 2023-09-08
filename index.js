let username = document.getElementById("user");
let password = document.getElementById("pass");
let flag = 1;
let dot = 1;

function validateForm(){
        // username = username.value.trim("");
        let check  = username.value.trim(" ");
        console.log(check)
    if(check.value == ""){
        document.getElementById("userError").innerHTML = "User Name is empty"
        flag = 0;
        
    }
    else if(check.length < 3){
        document.getElementById("userError").innerHTML = "User Name require min 3 char";
        flag = 0;

    }  else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is empty";
        flag =0;
    } else {
        document.getElementById("passError").innerHTML = "";
        flag = flag + dot;
    }
    
    if(flag == 2){
        return true;
    }else{
        return false
    }
}