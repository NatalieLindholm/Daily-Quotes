// Import the functions from the SDKs'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7wj-xrCt_uyqK6PJa9noqdo3oVn_W3yk",
    authDomain: "daily-7357d.firebaseapp.com",
    projectId: "daily-7357d",
    storageBucket: "daily-7357d.appspot.com",
    messagingSenderId: "561463390527",
    appId: "1:561463390527:web:de0f109cb95d627cf4638a",
    databaseURL: "https://daily-7357d-default-rtdb.europe-west1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Randomizer quotes
const random = Math.floor(Math.random() * 5) + 1

console.log(random)

// Hämtar från databasen och displayer dem
const dbRef = ref(getDatabase(app));
get(child(dbRef, "/quotes")).then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val()
        console.log(data)
        console.log(data[19195].author)
        document.querySelector("#author").innerText = data.author
        document.querySelector("#quote").innerText = data.content
    } else {
        console.log("failed");
    }
}).catch((error) => {
    console.error(error);
});
