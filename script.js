let display = document.getElementById('display');

// Funktio lisää painetun arvon näyttöön
function appendToDisplay(value) {
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Funktio tyhjentää näytön
function clearDisplay() {
    display.innerText = "0";
}

// Funktio poistaa viimeisen merkin näytöltä
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

// Funktio laskee tuloksen ja näyttää sen näytöllä
function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }
}

// Funktio teeman vaihtamiseen
function toggleTheme() {
    document.body.classList.toggle('night-mode');
    document.body.classList.toggle('day-mode');

    // Vaihda ikonin tekstiä
    const themeToggleButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('night-mode')) {
        themeToggleButton.textContent = '🌞'; // Auringon emoji päivänrežiimille
    } else {
        themeToggleButton.textContent = '🌙'; // Puolikuu-emoji yönrežiimille
    }
}

// Aseta oletusteema
document.body.classList.add('day-mode'); // Oletuksena päivänrežiimi
