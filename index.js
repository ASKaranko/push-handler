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
    }); 
  }
  
  function randomPush () {
    document.cookie = "pushNotif=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush1=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush2=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie = "fnpush3=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
        const random = Math.random();
        if (random < 0.33333) {
          document.cookie = "fnpush1=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification1();
        } else if (random >= 0.33333 && random < 0.66666) {
          document.cookie = "fnpush2=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification2();
        } else if (random >= 0.66666 && random <= 1) {
          document.cookie = "fnpush3=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
          pushNotification3();
        } 
        document.cookie = "pushNotif=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
  }
 
  function pushNotification1() {
    alert('Function 1');
    const head = document.getElementsByTagName('head')[0];
    createScriptElement("/daopush-init.js", head, 'defer');
  }

  function pushNotification2() {
    alert('Function 2');
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
        // проверьте путь данного скрипта
        script.src = "//fhsmtrnsfnt.com/pn07uscr/f/tr/zavbn/1831031/lib.js";
        script.type = 'text/javascript';
        script.async = true;
        script.dataset.cfasync = false;
        head.append(script);
  }

  function pushNotification3() {
    alert('Function 3');
    'use sctrict';
    let time_wait=0;
    let blackout=0;
    let yaban=0;
    let title="";
    let desc="";
    const head = document.getElementsByTagName('head')[0];
    head.insertAdjacentHTML('afterbegin', `<link rel="manifest" href="/manifest.json">`);
    createScriptElement("https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js", head, 'defer');
    createScriptElement("https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js", head, 'defer');
    createScriptElement("https://newsforum.world/localforage.min.js", head, 'defer');
    // defer или async, async может выполниться раньше трех первых скриптов, тут проверьте
    createScriptElement("https://newsforum.world/rp/rp.php?site=8021923&sub1=sub1", head, 'defer');
  }

  // третьим паратетром в данную функцию надо передавать строку
  // 'async' или 'defer'
  function createScriptElement(url, head, method = 'defer') {
    const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        method === 'defer' ? script.defer=true : script.async=true;
        head.append(script);
  }

});
