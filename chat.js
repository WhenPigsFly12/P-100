// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCUclR7k-RqBOk5a3mUzv2Xf_gquw5lXJs",
    authDomain: "kwitter-1-ee87c.firebaseapp.com",
    databaseURL: "https://kwitter-1-ee87c-default-rtdb.firebaseio.com",
    projectId: "kwitter-1-ee87c",
    storageBucket: "kwitter-1-ee87c.appspot.com",
    messagingSenderId: "325044352487",
    appId: "1:325044352487:web:ebb342134eaa7dedf3b942"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



