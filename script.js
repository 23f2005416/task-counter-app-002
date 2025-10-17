let count = 0;

function updateDisplay() {
    document.getElementById('count').textContent = count;
    document.body.style.backgroundColor = count < 0 ? '#ffebee' : count > 0 ? '#e8f5e8' : '#f5f5f5';
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

function incrementBy(value) {
    count += value;
    updateDisplay();
}

updateDisplay();