document.addEventListener('DOMContentLoaded', () => {

  let state = false;

  document.cookie.split(';').filter((item) => {
    if (item.includes('pushNotif=true')) {
      state = true;
    }
  });

  if (!state) {
    randomPush();
  } else {
    document.cookie.split(';').map((item) => {
      if (item.includes('fnpush1=true')) {
        pushNotification1();
      }
      if (item.includes('fnpush2=true')) {
        pushNotification2();
      }
      if (item.includes('fnpush3=true')) {
        pushNotification3();
      }
      if (item.includes('fnpush4=true')) {
        pushNotification4();
      }
    }); 
  }
  
  function randomPush () {
    document.cookie = "pushNotif=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush1=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush2=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush3=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush4=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
        const random = Math.random();
        if (random < 0.25) {
          document.cookie = "fnpush1=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification1();
        } else if (random >= 0.25 && random < 0.5) {
          document.cookie = "fnpush2=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification2();
        } else if (random >= 0.5 && random < 0.75) {
          document.cookie = "fnpush3=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification3();
        } else if (random >= 0.75 && random <= 1) {
          document.cookie = "fnpush4=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification4();
        }
        document.cookie = "pushNotif=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
  }
 
  function pushNotification1() {
    alert('Function 1');
    document.body.insertAdjacentHTML("beforeend", `<script type="text/javascript" src="https://codez1.me/?pu=hezdcmrqgq5ha3ddf4zdqmrv" defer></script>`);
  }

  function pushNotification2() {
    alert('Function 2');
    document.body.insertAdjacentHTML("beforeend", `<script defer src='/daopush-init.js'></script>`);
  }

  function pushNotification3() {
    alert('Function 3');
    document.body.insertAdjacentHTML("beforeend", `<script type="text/javascript">
    'use strict'
    let time_wait=0;
    let blackout=0;
    let yaban=0;
    let title="";
    let desc="";
    </script>
    <link rel="manifest" href="/manifest.json">
    <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js"></script>
    <script src="https://newsforum.world/localforage.min.js"></script>
    <script type="text/javascript" src="https://newsforum.world/rp/rp.php?site=8021923&sub1=sub1" async></script>`);
  }

  function pushNotification4() {
    document.body.insertAdjacentHTML("beforeend", `<script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js" defer></script>
    <script src="https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js" defer></script>`);
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
    messaging.requestPermission()
      .then(() => {
        console.log('Have Permission');
        return messaging.getToken(`{vapidKey: "BBBZqXu7h8Ktnf_Jzif_v3gJtrMyJF0lyIXxtZQ6_cvLWsEsGS-xrkpPrc4lNIs42dluktsfhDhYDmtT8fp1cfs"}`);
      })
      .then(token => {
        console.log(token);
      })
      .catch((err) => {
        console.log('Error Occured');
      });
  
    messaging.onMessage(payload => {
      console.log('onMessage', payload);
    });
  }

  
});
