function setupFireBase(){
    // Initialize Firebase
    var config = {
       //ADD YOUR KEY HERE....
       apiKey: "AIzaSyC8tq3uaqLXongMOhYZ3hQlsySsCotrayY",
       authDomain: "test-bb622.firebaseapp.com",
       databaseURL: "https://test-bb622.firebaseio.com",
       projectId: "test-bb622",
       storageBucket: "test-bb622.appspot.com",
       messagingSenderId: "683038114486"  
    };
    firebase.initializeApp(config);


    //check login

    var fa = firebase.auth();
    fa.onAuthStateChanged(firebaseUser=>{
        console.log(firebaseUser);
    });

}

window.onload = function(){
    
    //alert("ok");
    setupFireBase();
    
    var btnCreate = document.querySelector("#btn_create");
    //btnSave.onclick = function() {} #old style    
   
    btnCreate.addEventListener("click",function(){
        var user= document.querySelector("#userid").value;
        var pwd = document.querySelector("#password").value;

        console.log(user);
        console.log(pwd);

        var fa = firebase.auth();

        fa.createUserWithEmailAndPassword(user,pwd)
    });

    var btnLogin = document.querySelector("#btn_login");
    btnLogin.addEventListener("click",function(){
        var user= document.querySelector("#userid").value;
        var pwd = document.querySelector("#password").value;

        console.log(user);
        console.log(pwd);

        var fa = firebase.auth();

        fa.signInWithEmailAndPassword(user,pwd);
        console.log("User Logged IN");
        alert("login succes");

    });

    var btnLogout = document.querySelector("#btn_logout");
    btnLogout.addEventListener("click",function(){
        firebase.auth().signOut();
        console.log("User Logged Out");

    });

}