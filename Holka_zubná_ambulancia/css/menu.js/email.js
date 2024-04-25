function validate(){
    var mail = document.getElementById("text").value;

    var regx = /^([a-zA-ZO-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regx.text(mail)){
        alert("Máte platný email")
        return true
    }
    else{
        alert("Máte nesprávny email")
        return false;
    }

}