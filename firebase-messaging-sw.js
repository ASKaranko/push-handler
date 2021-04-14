importScripts("https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js");

const config = {
  apiKey: "AIzaSyD6at4dkd8J_2H2xYSXFwdYjOQvzgQdSok",
    authDomain: "test-4d380.firebaseapp.com",
    projectId: "test-4d380",
    storageBucket: "test-4d380.appspot.com",
    messagingSenderId: "359941483166",
    appId: "1:359941483166:web:43bb2711ead5851a31e98f",
    measurementId: "G-LHXYZLEQM1"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(payload => {
  const title = 'Hello World';
  const options = {
    body: payload.data.status,
  };
  return self.registration.showNotification(title, options);
});