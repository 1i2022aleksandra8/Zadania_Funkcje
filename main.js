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

// Zadanie 3: Funkcja generująca losową liczbę z podanego przedziału [min, max]
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Utworzenie 10 liczb z przedziału 1-20 i sprawdzenie warunku
function task3() {
    let min, max;

    // Pobieranie poprawnych wartości dla min i max
    do {
        min = parseInt(prompt("Podaj minimalną wartość przedziału (min) w zakresie od 1 do 20:"));
        max = parseInt(prompt("Podaj maksymalną wartość przedziału (max) w zakresie od 1 do 20:"));

        if (isNaN(min) || isNaN(max) || min < 1 || max > 20 || min >= max) {
            alert("Błędne wartości! Minimalna wartość musi być liczbą większą lub równą 1, maksymalna mniejszą lub równą 20, a minimalna musi być mniejsza od maksymalnej. Spróbuj ponownie.");
        }
    } while (isNaN(min) || isNaN(max) || min < 1 || max > 20 || min >= max);

    // Generowanie 10 losowych liczb z przedziału [min, max]
    const numbers = Array.from({ length: 10 }, () => generateRandom(min, max));

    // Zliczanie, ile z tych liczb jest większych od 10
    const countAbove10 = numbers.filter(num => num > 10).length;

    // Wyświetlanie wyników na stronie
    document.write(`Wygenerowane liczby: ${numbers.join(", ")}<br>`);
    if (countAbove10 >= 5) {
        document.write("Udało się<br>");
    } else {
        document.write("Niestety nie<br>");
    }
}



// Wywołania dla poszczególnych zadań
circleArea();
rectangleArea();
task3();