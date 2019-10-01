# Obiekty &ndash; zadania

> Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

### Zadanie 0 Car (~ 10min - 15 min)

Stwórz obiekt ```car```, utwórz dla niego odpowiednie właściwości i metody.

#### Właściwości:
1. brand,
2. color,
3. numberOfKilometers (na początku **0**).

#### Metody:
1. ```printCarinfo()``` &ndash; metoda powinna zwracać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
2. ```drive(km)``` &ndash; która dodaje do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.

```JavaScript
car.printCarinfo(); => "Czarny Mercedes, 0km"
car.drive(20);
car.printCarinfo(); => "Czerny mercedes, 20km"
```

### Zadanie 1 (~ 7min - 10min)

Do obiektu ```car``` z zadania poprzedniego dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy). Dodaj tą nową właściwość **poza ciałem obiektu**.

Dodaj też następujące metody:
 1. metodę dodającą wpis do tej tablicy,
 2. metodę zwracającą wszystkie przeglądy samochodu.

Użyj słowa kluczowego ```this```, żeby odwołać się do obiektu w środku metody.


### Zadanie 2 (~ 7min - 10min)

Przeanalizuj kod, który znajduje się w pliku ```zadanie02.js```. 

Jest tam stworzony obiekt ```calculator```, który posiada jedną metodę ```save(newA,newB)```. Zadaniem tej metody jest zapisanie dla tego obiektu pod pola a i b dwóch liczb.

Dopisz metody ```sum``` oraz ```multiply```, tak aby zwracały sumę oraz iloczyn tych dwóch liczb ustawionych w metodzie ```save```.

### Zadanie 3 (~ 7min - 10min)

Stwórz w pliku ```app.js``` obiekt ```stairs```.

Niech obiekt posiada pole ```step```, które na początku ustaw na 0. 

Dodaj do obiektu również następujące metody: 
* ```up()```, która zwiększa schodek o 1 (modyfikuj pole step)
* ```down()```, która zmniejsza schodek o 1 (modyfikuj pole step)
* ```printStep()```, która pokazuje, na którym schodku jesteśmy.

Przykład wywołania:
```JavaScript
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
```