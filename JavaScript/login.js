function login(){
    let name= document.getElementById("name").value;
    let email = document.getElementById("email").value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    console.log(name);
}
function loadHome(){
    let loginName = document.getElementById("search").children[0];
    let name=localStorage.getItem('name');
    loginName.innerHTML = `<a href="login.html" id="login">Welcome, ${name}</a>`;
}
function loadLogin(){
    let name = localStorage.getItem('name');
    let email = localStorage.getItem('email');
    let name1= document.getElementById("name");
    let email1 = document.getElementById("email");
    name1.value = name;
    email1.value = email;
}