 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA-6IczG1TtwXQwwe5V8WiRP-OSiPGVmiE",
    authDomain: "semana-mundo-invertido-dio.firebaseapp.com",
    projectId: "semana-mundo-invertido-dio",
    storageBucket: "semana-mundo-invertido-dio.appspot.com",
    messagingSenderId: "1083282294878",
    appId: "1:1083282294878:web:69b9153b3271fdf4198ccf"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export default app