# Inputy i Formularze

> Odpowiedzi wpisz w odpowiednich plikach, chyba że treść polecenia wskazuje inaczej.
Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

### Zadanie 0 Formularz walidacja (~ 10min - 15min)

Przy rozwiązywaniu tego zadania pamiętaj, aby teksty wypisywane w elementach ```error-message``` i ```success-message``` były identyczne jak w treści zadania.

Na stronie znajduje się formularz, który odsyła do strony ```http://api.coderslab.pl/showpost.php```.
Napisz walidację tego formularza w taki sposób, żeby wysyłany był tylko i wyłącznie wtedy, kiedy spełnione zostaną następujące warunki:

1. Email zawiera w sobie @.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```error-message``` informację: **Email musi posiadać znak @**,
2. Imię jest dłuższe niż 6 znaków.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```error-message``` informację: **Twoje imię jest za krótkie**,
3. Nazwisko jest dłuższe niż 6 znaków.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```error-message``` informację: **Twoje nazwisko jest za krótkie**,
4. Hasło i hasło drugie są identyczne, ale nie puste.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```error-message``` informację: **Hasła nie są takie same lub puste**,
5. Checkbox musi być zaznaczony.
    - Jeżeli warunek nie jest spełniony, wypisz w polu ```error-message``` informację: **Musisz zaakceptować warunki**.

Zauważ, jak dane wyświetlane są na stronie docelowej (jak ich nazwy są skorelowane z kodem HTML). Spróbuj pozmieniać atrybuty ```name``` i zobacz, jak się zmieniają wysyłane dane (np. sprawdź, co się stanie, jak dwa inputy mają taką samą nazwę).
Jest to bardzo ważne, ponieważ w taki sposób aplikacja zazwyczaj porozumiewa się z backendem.

### Zadanie 1 (~ 5min - 10min)

Na stronie znajduje się formularz do zamówienia. Jest w nim sekcja odpowiedzialna za wystawienie faktury.
Napisz kod JavaScript, który spowoduje, że sekcja ta jest widoczna tylko i wyłącznie wtedy, kiedy zaznaczony jest checkbox "Chcę otrzymać fakturę".

### Zadanie 2 (~ 10min - 15min)

Na stronie znajduje się select i trzy obrazki.
Każdy z obrazków jest przypisany do jednego z wyborów w selekcie. Napisz kod javaScript w taki sposób, żeby widoczny był tylko ten obrazek, który został wybrany.

### Zadanie 3  (~ 20min - 25min)

Na stronie znajduje się tabela z wynikami w lokalnych mistrzostwach piłkarskich. Poniżej znajduje się formularz, który wypełniają wszyscy sędziowie po ukończonych rozgrywkach.
Napisz kod JavaScript w taki sposób, żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
1. Obie drużyny muszą być różne.
2. Liczba goli powinna być nieujemna.

Jeżeli formularz zostanie zweryfikowany poprawnie, odpowiednia informacja o wyniku spotkania powinna pojawić się w tabeli jako kolejny wiersz.

### Zadanie 4 (~ 20min - 25min)
Walidacja karty kredytowej.

Zadanie polega na walidacji kart kredytowych wpisywanych w formularz na stronie. Walidacja ma następować w czasie rzeczywistym (czyli po wprowadzeniu każdej cyfry).
Nazwa karty ma być wpisana w element o id ```type```, jak tylko jest możliwe jej ustalenie, poprawność karty ma być pokazana po wpisaniu odpowiedniej liczby cyfr (np. ustawić obramowanie inputa na zielono).


##### Zasady rozpoznawania kart:
1. Karty Visa zaczynają się od cyfry 4.
1. Karty Mastercard zaczynają się od cyfry 5.
1. Karty American Express zaczynają się od cyfry 3. Następną cyfrą musi być 4 lub 7.

##### Zasady walidacji kart:
1. Karty Visa mają od 13 do 16 cyfr.
1. Karty Mastercard mają równo 16 cyfr.
1. Karty American Express mają równo 15 cyfr.

Zasady walidacji kart są uproszczone (nie powinniście ich stosować w rzeczywistych projektach).
Jeżeli chcesz poznać prawdziwe zasady walidacji kart kredytowych, to są one opisane tutaj:
https://en.wikipedia.org/wiki/Bank_card_number
https://en.wikipedia.org/wiki/Luhn_algorithm
