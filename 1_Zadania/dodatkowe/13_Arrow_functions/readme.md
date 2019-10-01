# Arrow functions &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

### Zadanie 0 Arrow functions i this

W pliku ```zadanie00.js``` dopisz funkcję ```countLetters```, której zadaniem będzie obliczenie długości imion studentów i zapisanie wyników w tablicy numberOfLetters. Tablica studentów jest przekazywana do konstruktora w trackie tworzenia obiektu za pomocą ```new```.
Następnie wypisz tablicę w konsoli.

```JavaScript
var students = new Students(["Ania", "Kamil", "Mariusz"]);
students.countLetters();
console.log(students.numberOfLetters); // [4, 5, 7]
```

### Zadanie 1

W pliku ```app.js``` stwórz funkcję, która wypisze tekst "Hello World" w konsoli.

### Zadanie 2

W pliku ```app.js``` stwórz funkcję, która przyjmie jeden parametr (liczbę), pomnoży ją przez dwa i zwróci wynik. Ustaw domyślną wartość dla parametru. Wypisz zwrócony wynik w konsoli.

### Zadanie 3

W pliku ```app.js``` stwórz funkcję, która przyjmie dwa parametry (liczby) i zwróci większą. Wynik wypisz w konsoli.

### Zadanie 4

W pliku ```app.js```  napisz funkcję ```getSecondMaxNumber(array)```, która jako argument przyjmuje tablicę. Funkcja **ma zwrócić** drugą największą liczbę w tablicy.

Przykład:
```JavaScript
var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
```

### Zadanie 5

W pliku ```app.js```  napisz funkcję, która sama się wywoła czyli (IIFE) i której zadaniem jest zwrócenie przekazanego do niej parametru.


### Zadanie 6

W pliku ```app.js``` napisz funkcję, która jako parametr przyjmie liczbę całkowitą od 1-10. Ustaw domyślną wartość dla parametru. W funkcji uruchom funkcję ```setInterval```. Niech jego zadaniem będzie wypisywanie w konsoli tekstu _"Hello"_ oraz licznika zliczającego, który raz już został uruchomiony ```setInterval```. Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty setInterval.

### Zadanie 7

W pliku ```zadanie07.js``` dopisz funkcję ```generateLinks```, która na podstawie istniejącej tablicy z nazwami serwisów internetowych stworzy nową tablicę z linkami do tych stron.

Na przykład:

```JavaScript
let app = new App();
app.generateLinks();
console.log(app.links) // ["https://onet.com", "https://wp.com", "https://facebook.com"]
```

Wstaw wygenerowane adresy do elementów ```a``` w liście o klasie ```menu``` w pliku ```index.html```. Uzyj jQuery.

### Zadanie 8

W pliku ```zadanie08.js``` jest stworzony obiekt ```dog```. Jego metoda ```setName``` nie działa prawidłowo. Spróbuj ją naprawić.


### Zadanie 9

W pliku ```index.html``` jest stworzone kilka elementów  ```div``` zawierających ```span``` i listę ```ul```.
Stwórz w pliku ```zadanie09.js``` kod, który spowoduje, że po najechaniu na element ```span```, rozwinie się lista ```ul```.
Wykorzystaj funkcję strzałki (Arrow function).
