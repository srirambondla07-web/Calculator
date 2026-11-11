const display = document.getElementById('display');

function appendValue(value) {
  if (display.value === 'Error') {
    display.value = '';
  }
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  if (display.value === 'Error') {
    display.value = '';
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  try {
    if (display.value.trim() === '') return;
   
    const result = new Function('return ' + display.value)();
    
    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      display.value = Number(result.toFixed(10));
    }
  } catch (error) {
    display.value = 'Error';
  }
}


document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (/[0-9+\-*/.%]/.test(key)) {
    appendValue(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
