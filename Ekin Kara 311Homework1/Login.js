function Validation()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var validUserNames=["admin","user"];
    var validUserPassword=["123","1234"];
    

    if(username==validUserNames[0] && password==validUserPassword[0]) 
    { 
         window.location.href="https://www.google.com.tr";  
         //We check if the username informations are correct.
    }
    else if(username==validUserNames[1] && password==validUserPassword[1])
    {
        window.location.href="https://www.google.com.tr";
    }
    else
    {
        alert("Login Falied!");
        //If the user info is incorrect, it shows an error message.
    }

}
// Prepared by Ekin Kara