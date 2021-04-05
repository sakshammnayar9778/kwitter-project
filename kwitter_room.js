  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBq8xi4qkIzGfYWMtIyI24tGmKWAP6jwVs",
    authDomain: "kwitter-app-a389b.firebaseapp.com",
    databaseURL: "https://kwitter-app-a389b-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-a389b",
    storageBucket: "kwitter-app-a389b.appspot.com",
    messagingSenderId: "916828358149",
    appId: "1:916828358149:web:7a3ee94140a4387a08be6c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  }
  getData();