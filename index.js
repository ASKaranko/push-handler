const button = document.getElementById('push');

function funcA() {
  console.log('[Function A]');
  getCounterByID();
  setCounterByID('./push.json', { id: button.dataset.id, counter: 15 });
}

function funcB() {
  console.log('[Function B]');
  getCounterByID();
  setCounterByID('./push.json', { id: button.dataset.id, counter: 15 });
}

function funcC() {
  console.log('[Function C]');
  getCounterByID();
  setCounterByID('./push.json', { id: button.dataset.id, counter: 15 });
}

function funcD() {
  console.log('[Function D]');
  getCounterByID();
  setCounterByID('./push.json', { id: button.dataset.id, counter: 15 });
}

const date = new Date();
const time = date.getUTCMinutes();

if (time <= 15) {
  funcA();
} else if (time > 15 && time <= 30) {
  funcB();
} else if (time > 30 && time <= 45) {
  funcC();
} else if (time > 45 && time <= 59) {
  funcD();
}

function getCounterByID() {
  fetch('./push.json', {
    method: 'GET',
    mode: 'no-cors'
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('error');
      }
      return response.json();
    })
    .then(response => {
      response.pushWindows.forEach(item => {
        if (button.dataset.id === item.id) {
          console.log(item.counter);
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
}

function setCounterByID(url = './push.json', data = { id: null, counter: null }) {
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.status !== 200) {
        throw new Error('error');
      }
      return response.json();
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}


