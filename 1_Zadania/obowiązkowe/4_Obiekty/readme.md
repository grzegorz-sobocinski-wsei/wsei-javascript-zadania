 # Obiekty &ndash; zadania

> Odpowiedzi wpisz w pliku **app.js**, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

### Zadanie 0a Obiekt Country (~ 5min - 7min)

Stwórz obiekt city. Dopisz do niego następujące właściwości:

* capital - string, 
* population - number,
* president - string,
* primeMinisters - tablica stringów

Wypisz w konsoli wszystkie właściwości.

### Zadanie 0b Obiekt timeMachine (~ 5min - 7min)

Stwórz obiekt timeMachine. Dopisz do niego następujące właściwości:

* shape - string, 
* model - string,
* run(date, place) - metoda, dzięki której można się przenieść w czasie. Argument ```date``` to data, do jakiej chcemy się przenieść, a ```place``` to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi. 

Wypisz w konsoli wszystkie właściwości i uruchom metodę run.

### Zadanie 1 (~ 5min - 7min)

Stwórz obiekt book. Dopisz do niego następujące właściwości:

1. title,
2. author,
3. numberOfPages

Wypisz te właściwości w konsoli.


### Zadanie 2 (~ 5min - 7min)

Stwórz obiekt person. Dopisz do niego następujące właściwości i metodę:

1. name,
2. age,
3. sayHello() - wypisującą string "hello"

Wypisz właściwości w konsoli, wywołaj metodę.


### Zadanie 3 (~ 5min - 7min)

Stwórz obiekt, który będzie przetrzymywał Twój ulubiony przepis. Obiekt powinien mieć własność ```title``` (string), ```servings``` (number) oraz ```ingredients``` (tablica stringów). Dodaj pole ```ingredients``` poza ciałem obiektu. Wypisz w konsoli te wszystkie informacje.

### Zadanie 4 (~ 5min - 10min)

W pliku ```zadanie04.js``` znajdziesz obiekt ```movie```. Użyj pętli ```for ... in```, żeby wypisać w konsoli informacje o filmie.


### Zadanie 5 (~ 10min - 15min)

W pliku ```zadanie05.js``` znajdziesz tablicę obiektów ```animals```. Użyj pętli ```for``` oraz pętli ```for ... in```, żeby wypisać wszystkie informacje.

### Zadanie 6 (~ 5min - 10min)

Do pliku ```app.js``` przekopiuj poniższy kod:

```JavaScript
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

```
Następnie sprawdź czy łyżka istnieje. 