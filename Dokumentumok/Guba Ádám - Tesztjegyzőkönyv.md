# Tesztjegyzőkönyv

Teszteléseket végezte:

Operációs rendszer:

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :-------: | ------------------- | ------- | -------- | ----- |
|Regisztrációs gomb|2023.12.10|A regisztrációs gombra rákattintva regisztráció felület megjelenítése. |A regisztrációs felület megjelenik.|Megfelelően működik, nem találtam hibát.|
|Regisztráció|2023.12.10|A regisztráció során felhasználónév, email, jelszó megadása és elmentése.|A regisztráció során az adatokat az adatbázisba kerülnek.|Megfelelően működik, nem találtam hibát.|
|Regisztráció ellenőrzés (jelszó) |2023.12.10|A regisztráció során a program ellenőrizze a jelszót.|A program ellenőrzi a jelszó hosszát, speciális karaktereket, kis és nagy betűket.|Megfelelően működik, nem találtam hibát.|
|Regisztráció ellenőrzés (email)|2023.12.10|A regisztráció során a program ellenőrizze az emailt, hogy szerepel-e az adatbázisban, ha igen akkor hibát jelezzen.|Az email bekerül az adatbázisba, hibát dob, ha már szerepel egyszer az email cím. |Megfelelően működik, nem találtam hibát|
|Regisztráció ellenőrzés (felhasználónév)|2023.12.10|A regisztráció során a program ellenőrizze a felhasználónevet, hogy szerepel-e az adatbázisban, ha igen akkor hibát jelezzen.|A felhasználónév bekerül az adatbázisba, de nem dob hibát, ha már egyszer szerepel az adatbázisban a felhasználó név. |Találtam hibát, a későbbiekben javításra szorul. |
|Bejelentkezés gomb|2023.12.10|A bejelentkezés gombra kattintva bejelentkező felület megjelenítése.|A bejelentkező felület megjelenik. |Megfelelően működik, nem találtam hibát. |
|Bejelentkezés (email) |2023.12.10|A program ellenőrizze, hogy szerepel-e az email cím adatbázisban, ha nem hiba üzenetet dobjon. |A program megkeresi az adatbázisban az email címet, ha nem szerepel hibabüzenetet dob.|Megfelelően működik, nem találtam hibát. |
|Bejelentkezés (jelszó) |2023.12.10|A program ellenőrizze, hogy az email címhez az adott jelszó van-e hozzá rendelve, ha nem hiba üzenetet dobjon. |A program megkeresi az adatbázisban a jelszót, ha nem szerepel hibabüzenetet dobjon.|Megfelelően működik, nem találtam hibát.|
|Bejelentkezés|2023.12.10|A bejelentkezés után a főoldal változzon meg, legyen elérhető a profil oldal. |A főoldal a bejelentkezés után, láthatók a kérdőívek, a profil és kijelenkezés gombok. |Megfelelően működik, nem találtam hibát. |
|Kijelentkezés|2023.12.10|A kijelenkezés gombra kattintva a vendég felhasználó felület jelenjen meg. |Eltűnnek a kérdőívek, a gombok kicserélődnek. |Megfelelően működik, nem találtam hibát. |
|Profil gomb|2023.12.10|A profil gombra kattintva a profil oldal jelenjen meg. |A profil oldal megjelenik, az oldalon megjelennek a felhasználó adatai. |Megfelelően működik, nem táláltam hibát. |
|Profil oldal|2023.12.10|A profil oldalon jelenjenek meg a felhasználó adatai. |A profil oldalon megjelenik a email címe a felhasználónak, de nem jelenik meg a felhasználó név és a felhasználó képet a program nem menti el az adatbázisba. |Találtam több hibát is, a későbbiekben javításra szorul. |


Az Alfa tesztelés során a vizsgált elemek között volt ami nem megfelelően működött, ez a későbbiek során javításra szorul.

Következő tesztelésnél a többi funkció kerül vizsgálatra illetve elemzésre.

## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :-------: | ------------------- | ------- | -------- | ----- |
|Regisztrációs gomb|2023.12.13|A regisztrációs gombra rákattintva regisztráció felület megjelenítése. |A regisztrációs felület megjelenik.|Megfelelően működik, nem találtam hibát.|
|Regisztráció|2023.12.13|A regisztráció során felhasználónév, email, jelszó megadása és elmentése.|A regisztráció során az adatokat az adatbázisba kerülnek.|Megfelelően működik, nem találtam hibát.|
|Regisztráció ellenőrzés (jelszó) |2023.12.13|A regisztráció során a program ellenőrizze a jelszót.|A program ellenőrzi a jelszó hosszát, speciális karaktereket, kis és nagy betűket.|Megfelelően működik, nem találtam hibát.|
|Regisztráció ellenőrzés (email)|2023.12.13|A regisztráció során a program ellenőrizze az emailt, hogy szerepel-e az adatbázisban, ha igen akkor hibát jelezzen.|Az email bekerül az adatbázisba, hibát dob, ha már szerepel egyszer az email cím. |Megfelelően működik, nem találtam hibát|
|Regisztráció ellenőrzés (felhasználónév)|2023.12.13|A regisztráció során a program ellenőrizze a felhasználónevet, hogy szerepel-e az adatbázisban, ha igen akkor hibát jelezzen.|A felhasználónév bekerül az adatbázisba, de nem dob hibát, ha már egyszer szerepel az adatbázisban a felhasználó név. |Találtam hibát, a későbbiekben javításra szorul. |
|Bejelentkezés gomb|2023.12.13|A bejelentkezés gombra kattintva bejelentkező felület megjelenítése.|A bejelentkező felület megjelenik. |Megfelelően működik, nem találtam hibát. |
|Bejelentkezés (email) |2023.12.13|A program ellenőrizze, hogy szerepel-e az email cím adatbázisban, ha nem hiba üzenetet dobjon. |A program megkeresi az adatbázisban az email címet, ha nem szerepel hibabüzenetet dob.|Megfelelően működik, nem találtam hibát. |
|Bejelentkezés (jelszó) |2023.12.13|A program ellenőrizze, hogy az email címhez az adott jelszó van-e hozzá rendelve, ha nem hiba üzenetet dobjon. |A program megkeresi az adatbázisban a jelszót, ha nem szerepel hibabüzenetet dobjon.|Megfelelően működik, nem találtam hibát.|
|Bejelentkezés|2023.12.13|A bejelentkezés után a főoldal változzon meg, legyen elérhető a profil oldal. |A főoldal a bejelentkezés után, láthatók a kérdőívek, a profil és kijelenkezés gombok. |Megfelelően működik, nem találtam hibát. |
|Kijelentkezés|2023.12.13|A kijelenkezés gombra kattintva a vendég felhasználó felület jelenjen meg. |Eltűnnek a kérdőívek, a gombok kicserélődnek. |Megfelelően működik, nem találtam hibát. |
|Profil gomb|2023.12.13|A profil gombra kattintva a profil oldal jelenjen meg. |A profil oldal megjelenik, az oldalon megjelennek a felhasználó adatai. |Megfelelően működik, nem táláltam hibát. |
|Profil oldal|2023.12.13|A profil oldalon jelenjenek meg a felhasználó adatai. |A profil oldalon megjelenik a email címe a felhasználónak, de nem jelenik meg a felhasználó név és a felhasználó képet a program nem menti el az adatbázisba. |Találtam több hibát is, a későbbiekben javításra szorul. |


A Béta teszt sikeresen zajlott.
A Béta teszt során akadtan hibák, mely(ek) javításra szorulnak.

A végleges tesztelés során az összes fent felsorolt vizsgálati elem újra ellenőrzésre kerül. Ezzel együtt az új funkciók is tesztelésre kerültek.

## Végleges teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :-------: | ------------------- | ------- | -------- | ----- |
|    ...    | 2022.xx.xx.         | ...     | ...      | ...   |

A Végleges teszt lezajlott és minden funkció rendesen működik, esztétikailag is megfelelő a program.

Átadásra készen áll a megrendelőnek.

Tesztelést végezte és írta:

Befejezve: 2022.xx.xx.
