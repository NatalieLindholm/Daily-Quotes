// Import the functions from the SDKs'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, child, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

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

const db = getDatabase()

const quoteBox = document.querySelector(".quoteBox")

const loginBox = document.querySelector(".auth");

// Listen for a click on login button
document.querySelector("#login").addEventListener("click", function () {
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const auth = getAuth();

    // Sign in with Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

            if (user) {
                loginBox.style.display = "none";
                quoteBox.classList.remove("hide")
            }
        })
        .catch((error) => {
            console.log(error);
        });

});


// Submit quotes

// Listen for clicks on submit button
document.querySelector("#submit").addEventListener("click", function (e) {
    e.preventDefault()
    const dbRef = ref(db, "quotes/" + Math.floor(Math.random() * 100000))
    set(dbRef, {
        content: document.querySelector("#quote").value,
        author: document.querySelector("#author").value
    }).then(data => console.log(data))
        .catch((error) => {
            console.log(error);
        });

})