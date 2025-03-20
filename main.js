// Zadanie 1: Funkcja obliczająca pole koła
function circleArea() {
    const radius = parseFloat(prompt("Podaj promień koła:"));
    if (isNaN(radius) || radius <= 0) {
        alert("Podaj prawidłowy promień większy od zera!");
    } else {
        document.write(`Pole koła o promieniu: ${radius} wynosi: ${Math.PI * radius * radius}<br>`);
    }
}

// Zadanie 2: Funkcja obliczająca pole prostokąta z wartościami domyślnymi
function rectangleArea() {
    const a = parseFloat(prompt("Podaj długość pierwszego boku prostokąta:") || 1);
    const b = parseFloat(prompt("Podaj długość drugiego boku prostokąta:") || 1);

    if (isNaN(a) || a <= 0 || isNaN(b) || b <= 0) {
        alert("Podaj prawidłowe wartości boków większe od zera!");
    } else {
        document.write(`Pole prostokąta o bokach: ${a} i ${b} wynosi: ${a * b}<br>`);
    }
}

// Zadanie 3: Funkcja generująca losową liczbę z przedziału [min, max]
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Funkcja testująca losowe liczby
function testRandomNumbers() {
    const numbers = Array.from({ length: 10 }, () => generateRandom(1, 20));
    const countAbove10 = numbers.filter(num => num > 10).length;

    document.write(`Wygenerowane liczby: ${numbers.join(", ")}<br>`);
    if (countAbove10 >= 5) {
        document.write("Udało się<br>");
    } else {
        console.log("Niestety nie");
    }
}

// Wywołanie funkcji w oknach dialogowych
circleArea();
rectangleArea();
testRandomNumbers();