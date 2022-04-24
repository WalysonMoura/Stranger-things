document.addEventListener("DOMContentLoaded", event => {
  const letters = [...document.querySelectorAll('.letter')];
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  letters.forEach(l => l.addEventListener('click', blinkInfinite))

  function blinkInfinite() {
    if (this.classList.contains('blink')) {
      this.classList.remove('blink');
      this.classList.remove('light');
    } else {
      this.classList.add('blink');
      this.classList.add('light');
    }
  }


  function blinkAll() {
    letters.forEach(l => {
      let blink = blinkInfinite.bind(l)
      blink();
    });
  }

  function turnOffAll() {
    letters.forEach(l => {
      l.classList.remove('light');
      l.classList.remove('blink');
    });
  }


  function blinkWords(w) {
    turnOffAll();
    const word = w.toUpperCase().replace(/[^A-Z]+/g, '').split('');
    word.forEach((ch, idx) => {
      const letter = document.querySelector(`#${ch}`)
      setTimeout(() => {
        letter.classList.add('light');
      }, idx * 1500);
      setTimeout(() => {
        letter.classList.remove('light');
      }, 1000 + idx * 1500);
    });
  }

  blinkWords('Stranger Things')

  function blinkAlphabet(toAndFro = false) {
    (toAndFro) ? letters.reverse(): letters;
    letters.forEach((l, idx) => {
      setTimeout(() => {
        l.classList.add('light');
        l.classList.add('blink');
      }, idx * 50)
    });
    setTimeout(() => {
      letters.forEach((l, idx) => {
        setTimeout(() => {
          l.classList.remove('light');
          l.classList.remove('blink');
        }, idx * 50)
      });
    }, 1300)


  }

  document.addEventListener('keydown', lightOn);

  function lightOn(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (e.key == e.key.toUpperCase()) {
        //Uppercase
        const letter = document.querySelector(`#${e.key}`);
        if (!letter.classList.contains('light') &&
          !letter.classList.contains('blink')) {
          turnOffAll();
          letter.classList.add('light');
        } else if (letter.classList.contains('light') &&
          !letter.classList.contains('blink')) {
          letter.classList.add('blink');
        } else {
          letter.classList.remove('blink');
          letter.classList.remove('light');
        }
      } else {
        //Lowercase
        const key = e.key.toUpperCase();
        const letter = document.querySelector(`#${key}`);
        (!letter.classList.contains('blink')) ?
        letter.classList.toggle('light'):
          letter.classList.toggle('blink');
      }
      return;
    }

    //Numbers
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      turnOffAll();
      const idx = Number(e.key);
      blinkWords(numbers[idx]);
      return;
    }
    //Shift
    if (e.keyCode === 16) {
      blinkAll();
      return;
    }
    //Backspace
    if (e.keyCode === 8) {
      blinkAlphabet(true);
      return;
    }
    //Enter
    if (e.keyCode == 13) {
      const arr = [];
      while (arr.length < 26) {
        const randomnumber = Math.floor(Math.random() * 26)
        if (arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
      }
      letters.forEach((l, idx) => {
        setTimeout(() => {
          letters[arr[idx]].classList.add('light');
          if (letters[arr[idx]].classList.contains('blink')) {
            letters[arr[idx]].classList.remove('blink');
          }
        }, idx * 200)
      })
      return;
    }
    //Space
    if (e.keyCode == 32) {
      letters.forEach((l, idx) => {
        setTimeout(() => {
          l.classList.toggle('light');
          l.classList.toggle('blink');
          addLightIfBlink(l)
        }, idx * 100)
        setTimeout(() => {
          letters[idx].classList.toggle('light');
          letters[idx].classList.toggle('blink');
          addLightIfBlink(letters[idx])
        }, idx * 100)
      })
      letters.reverse();
      return;
    }
    //Control
    if (e.keyCode == 17) {
      letters.reverse();
      letters.forEach((l, idx) => {
        if (idx % 2 === 1) {
          l.classList.add('light');
          l.classList.add('blink');
        } else {
          l.classList.remove('light');
          l.classList.remove('blink');
        }
      })
      return;
    }

  }


  function addLightIfBlink(el) {
    if (el.classList.contains('blink') && !el.classList.contains('light')) {
      el.classList.add('light');
    }
  }


  const btn = document.querySelector('#btnBlink');
  const input = document.querySelector('input');

  input.addEventListener('focus', function() {
    input.value = '';
    document.removeEventListener('keydown', lightOn);
  })

  input.addEventListener('blur', function() {
    document.addEventListener('keydown', lightOn);
  })
  btn.addEventListener('click', function() {
    blinkWords(input.value);
  })
});
