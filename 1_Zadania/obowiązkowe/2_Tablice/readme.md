# Tablice &ndash; zadania

> Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

### Zadanie 0 Znajdź róźnice  (~ 10min - 15min)

Napisz funkcję ```distFromAvarage```, która ma przyjmować tylko jeden argument &ndash; tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy.
Np.

```JavaScript
distFromAvarage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```


### Zadanie 1 (~ 5min - 10 min)

Stwórz tablicę z listą swoich ulubionych owoców. Następnie:
1. Wypisz pierwszy owoc w konsoli.
2. Wypisz ostatni owoc w konsoli (skorzystaj z atrybutu ```length```).
3. W pętli wypisz wszystkie owoce (skorzystaj z atrybutu ```length```).

### Zadanie 2 (~ 5min - 10 min)

Zajrzyj do pliku **zadanie02.js** &ndash; jest tam przykładowa funkcja, która tworzy tablicę z liczbami. Niestety nie działa ona dobrze. Znajdź błąd i napraw go, tak żeby funkcja działała.

### Zadanie 3 (~ 5min - 10 min)

Napisz funkcję ```printTable(array)```, która przyjmuje tylko jeden parametr &ndash; tablicę. Następnie przy pomocy pętli **for** przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.

### Zadanie 4 (~ 10min - 15 min)

Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument &ndash; tablicę. Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy (przy pomocy pętli **for**) i zwrócić wynik.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) => 1
multiply([2,8,3,7]) => 336
```

### Zadanie 5 (~ 10min - 15 min)

Napisz funkcję ```getEvenAvarage```, która ma przyjmować tylko jeden argument &ndash; tablicę. Funkcja ta ma zwracać średnią wartość **parzystych** liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby. Jeśli w tablicy nie ma parzystych liczb niech zwraca null.

```JavaScript
getEvenAvarage([1,2,3,4,5,6,7]) => 4
getEvenAvarage([1,1,1,1]) => null
getEvenAvarage([2,8,3,7,4]) => 4.666
```

### Zadanie 6  (~ 15min - 20 min)

Napisz funkcję ```sortArray```, która ma przyjmować tylko jeden argument &ndash; tablicę zawierającą  liczby całkowite. Funkcja ta ma zwracać posortowaną rosnąco tablicę. Możesz skorzystać z metod tablicowych.

```JavaScript
sortArray([145,11,3,64,4,6,10]) => [3,4,6,10,11,64,145]
```

### Zadanie 7  (~ 15min - 20 min)

Napisz funkcję ```addArrays```, która ma przyjmować dwa argumenty &ndash; dwie tablice  zawierające  liczby całkowite. Funkcja ta ma zwracać również tablicę, która będzie wynikiem dodawania każdego elementu o tym samym indeksie. Jeżeli, tablice nie są równe, elementy nadmiarowe są przepisywane do nowej tablicy.
```JavaScript
addArrays([4,0,1,3,4], [1,9,6,7,8,17]) => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]) => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]) => [5,4,77,6,3,5]
```
