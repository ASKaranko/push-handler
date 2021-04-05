document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('push');

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

  const date = new Date();
  const time = date.getUTCMinutes();


  const int = [0, 20, 40];

  for (let i = 0; i < int.length; i++) {
    if (time > int[i] && time <= 5 + int[i]) {
      pushNotification1();
      console.log(int[i]);
    } else if (time > int[i] + 5 && time <= 10 + int[i]) {
      pushNotification2();
      console.log(int[i]);
    } else if (time > 10 + int[i] && time <= 15 + int[i]) {
      pushNotification3();
      console.log(int[i]);
    } else if (time > 15 + int[i] && time <= 20 + int[i]) {
      pushNotification4();
      console.log(int[i]);
    }
  }
});


