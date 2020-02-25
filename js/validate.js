function validate() {
    var user = document.getElementById("userField").value;
    var password = document.getElementById("passwordField").value;
    
    if (user == 'evolua' && password == 'evolua') {
        alert("Login bem sucedido!");
        window.location.href = "dashboard.html";
    } else{
    alert("Senha errada (Usuario:evolua, Senha:evolua)");
    window.location.href = "login.html";
    }  
}