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
    const head = document.getElementsByTagName('head')[0];
    createScriptElement("https://codez1.me/?pu=hezdcmrqgq5ha3ddf4zdqmrv", head, 'async');
  }

  function pushNotification2() {
    alert('Function 2');
    const head = document.getElementsByTagName('head')[0];
    createScriptElement('/daopush-init.js', head, 'async');
  }

  function pushNotification3() {
    alert('Function 3');

    const head = document.getElementsByTagName('head')[0];
    // head.insertAdjacentHTML('afterbegin', `<link rel="manifest" href="/manifest.json">`);
    createScriptElement("./script.js", head);
    createScriptElement("https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js", head, 'defer');
    createScriptElement("https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js", head, 'defer');
    createScriptElement("https://newsforum.world/localforage.min.js", head, 'defer');
    createScriptElement("https://newsforum.world/rp/rp.php?site=8021923&sub1=sub1", head, 'defer');
  }

  function pushNotification4() {

    // import('./firebase.js')
    //   .then(module => {
    //     console.log(module);
    //   })
    //   .catch(err => {
    //     main.textContent = err.message;
    //   });

    const head = document.getElementsByTagName('head')[0];

        createScriptElement("https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js", head);
        createScriptElement("https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js", head);
  
    setTimeout(() => {
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
              return messaging.getToken();
            })
            .then(token => {
              console.log(token);
            })
            .catch((err) => {
              console.log(err);
            });
  
          messaging.onMessage(payload => {
            console.log('onMessage', payload);
          });
    }, 5000);
  }

  function createScriptElement(url, head, method = 'defer') {
    const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        method === 'defer' ? script.defer=true : script.async=true;
        head.append(script);
  }

});
