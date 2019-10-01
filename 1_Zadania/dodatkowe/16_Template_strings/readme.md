# Interpolacja stringów &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

###  Zadanie 0 Funkcja, template string i obiekt

W pliku ```app.js``` stwórz funkcję ```whoAreYou()```, której celem będzie **zwrócenie**  stringa (przykład niżej), na podstawie przekazanego do niej obiektu ```person```.


```JavaScript
const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

whoAreYou(person);
```

```HTML
My name is Vlad Drăculea.
I am 586 years old.
My proffesion is Lord of Wallachia
```

### Zadanie 1

W pliku ```app.js``` stwórz dwie zmienne, które będą przechowywały dowolne liczby. Następnie wypisz ich sumę w konsoli korzystając z łańcucha szablonowego (Template strings).
Przykład:
```JavaScript
Suma dwóch liczb 2 i 4 to: 6
```

### Zadanie 2

W pliku ```app.js``` wstaw do zmiennej swoje imię. Następnie wypisz je w konsoli razem z nazwiskiem. Przykład:

```JavaScript
Moje imię i nazwisko to: Chuck Norris
```

### Zadanie 3

W pliku ```app.js``` stwórz funkcję, której celem będzie wypisanie w konsoli kilkulinijkowego tekstu np:

```HTML
"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock
```


### Zadanie 4

W pliku ```app.js```  mając do dyspozycji obiekt button (przykład niżej), wypisz w konsoli następujący tekst:

```HTML
To jest button.
Jego szerokość to 140px.
Napis, który na nim widnieje to "Send message"
```

```JavaScript
const button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px",
}
```