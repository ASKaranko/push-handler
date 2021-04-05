document.addEventListener('DOMContentLoaded', () => {

  let state = false;

  document.cookie.split(';').filter((item) => {
    if (item.includes('pushNotif=true')) {
      state = true;
    }
  });

  if (!state) {
    randomPush();
  }
  
  function randomPush () {
    document.cookie = "pushNotif=false; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
    document.cookie.split(';').filter((item) => {
      if (item.includes('pushNotif=false')) {
        if (Math.random() < 0.25) {
          pushNotification1();
          
        } else if (Math.random() >= 0.25 && Math.random() < 0.5) {
          pushNotification2();
          
        } else if (Math.random() >= 0.5 && Math.random() < 0.75) {
          pushNotification3();
          
        } else if (Math.random() >= 0.75 && Math.random() <= 1) {
          pushNotification4();
          
        }
        document.cookie = "pushNotif=true; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
      }
    });
  }
 
  function pushNotification1() {
    alert('Function 1');
  }

  function pushNotification2() {
    alert('Function 2');
  }

  function pushNotification3() {
    alert('Function 3');
  }

  function pushNotification4() {
    alert('Function 4');
  }

});
