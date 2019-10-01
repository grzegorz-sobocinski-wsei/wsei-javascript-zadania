# Import i eksport &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać kod JavaScript w wersji 6.
>
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, plikiem  wyjściowym  ma być `js/out.js`

### Zadanie 1

W folderze ```js``` znajdziesz 3 pliki:
* ```polygon.js``` - zawierający klasę opisującą figurę geometryczną (wielokąt)
* ```square.js``` - zawierający klasę dziedziczącą po klasie polygon
* ```app.js``` - w którym towrzony jest obiekt na bazie klasy Square.

Twoim zadaniem jest połączenie plików w taki sposób, aby Square widział Polygon, a plik app.js widział klasę Square.
Tak, aby plik wyjściowy ```out.js``` nie wywoływał błędów w konsoli.
