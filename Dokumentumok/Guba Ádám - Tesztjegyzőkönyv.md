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

|Főoldal - főoldal megjelenítése1|2024.01.22|A főoldalon vendég módban csak egy szöveg jelejen meg.|A főoldal felületén megjelenik a szöveg.|Megfelelően működik, nem találtam hibát.|
|Főoldal - főoldal megjelenítése1|2024.01.22|A főoldalon felhasználói módban jelenjenek meg a kérdőívek.|A főoldal felületén megjelennek a kérdőívek.|Megfelelően működik, nem találtam hibát.|

|Regisztráció - gomb kezelés|2024.01.22|A regisztrációs gombra rákattintva regisztráció felület megjelnése.|A regisztrációs felület megjelenik.|Megfelelően működik, nem találtam hibát.|
|Regisztráció - jelszó megjelenítés|2024.01.22|A regisztrációs során a jelszó megjelenítő funkcióra rákattintva megjelenítse a beírt szöveget.|A jelszó megjelenik. |Megfelelően működik, nem találtam hibát.|
|Regisztráció - adatbázis tárolás|2024.01.22|A regisztráció során felhasználónév, email, jelszó megadása és elmentése az adatbázisba.|A regisztráció során az adatokat az elvártak szerint kerülnek bele az adatbázisba.|Megfelelően működik, nem találtam hibát.|
|Regisztráció - jelszó ellenőrzés|2024.01.22|A regisztráció során a program végezzen jelszó ellenőrzést.|A program ellenőrzi a jelszó hosszát, speciális karaktereket, kis és nagy betűket.|Megfelelően működik, nem találtam hibát.|
|Regisztráció - email ellenőrzés|2024.01.22|A regisztráció során a program ellenőrizze az emailt, hogy szerepel-e az adatbázisban, ha igen akkor hibát jelezzen.|Az email bekerül az adatbázisba, hibát dob, ha már szerepel egyszer az email cím. |Megfelelően működik, nem találtam hibát.|
|Regisztráció - hiba kezelés|2024.01.22|A regisztráció során a program ellenőrizze, hogy minden mezőt kitöltöttünk-e.|A regisztráció során a program ellenőrzi a kitöltött mezőket, ha nincs minden kitöltve hibaüzenetet dob|Megfelelően működik, nem találtam hibát.|

|Regisztráció - hiba kezelés|2024.01.22|A bejelentkezés során a program ellenőrizze, hogy minden mezőt kitöltöttünk-e.|A bejelentkezés során a program ellenőrzi a kitöltött mezőket, ha nincs minden kitöltve hibaüzenetet dob|Megfelelően működik, nem találtam hibát.|
|Bejelentkezés - gomb kezelés|2024.01.22|A bejelentkezés gombra kattintva bejelentkező felület megjelenítése.|A bejelentkező felület megjelenik. |Megfelelően működik, nem találtam hibát. |
|Bejelentkezés - email elleőrzés|2024.01.22|A program ellenőrizze, hogy szerepel-e az email cím adatbázisban, ha nem hiba üzenetet dobjon. |A program megkeresi az adatbázisban az email címet, ha nem szerepel hibabüzenetet dob.|Megfelelően működik, nem találtam hibát. |
|Bejelentkezés - jelszó ellenőrzés|2024.01.22|A program ellenőrizze, hogy az email címhez az adott jelszó van-e hozzá rendelve, ha nem hiba üzenetet dobjon. |A program megkeresi az adatbázisban a jelszót, ha nem szerepel hibabüzenetet dob.|Megfelelően működik, nem találtam hibát.|
|Bejelentkezés|2024.01.22|A bejelentkezés után a főoldal változzon meg, legyen elérhető a profil oldal. |A főoldal a bejelentkezés után, láthatók a kérdőívek, a profil és kijelenkezés gombok. |Megfelelően működik, nem találtam hibát. |

|Kijelentkezés - gomb kezelés|2024.01.22|A kijelenkezés gombra kattintva a vendég felhasználó felület jelenjen meg. |Eltűnnek a kérdőívek, a gombok kicserélődnek, megjelenik a kezdő felület. |Megfelelően működik, nem találtam hibát. |

|Profil - gomb kezelés|2024.01.22|A profil gombra kattintva a profil oldal jelenjen meg. |A profil oldal megjelenik. |Megfelelően működik, nem táláltam hibát. |
|Profil - adat megjelenítés|2024.01.22|A profil oldalon jelenjenek meg a felhasználó adatai. |A profil oldalon megjelenik a email címe és a felhasználóneve | Megfelelően működik, nem találtam hibát.|

|Főoldal - questionnaire gomb kezelés1|2024.01.22|Questionnaire gomb jelenítse meg főoldalt vendég módban.|A főoldal felülete megjelenik vendég módban.|Megfelelően működik, nem találtam hibát.|
|Főoldal - questionnaire kezelés2|2024.01.22|Questionnaire gomb jelenítse meg főoldalt felhasználói módban.|A főoldal felülete megjelenik felhasználói módban.|Megfelelően működik, nem találtam hibát.|

|Főoldal - kérdőívek megjelenítése|2024.01.22|Jelenítse meg a kérdőíveket.|A főoldal felületén megjelennek a kérdőívek.|Megfelelően működik, nem találtam hibát.|
|Főoldal - kérdőívek témák megjelenítése|2024.01.22|Jelenítse meg a kérdőív témákat.|A főoldal felületén megjelennek a kérdőívek témájai és a kérdőveket annak megfelelően elkülönülnek.|Megfelelően működik, nem találtam hibát.|
|Főoldal - kérdőív gomb kezelés|2024.01.22|A kérdőívre rákattintva jelenjen meg a kérdőív kitöltő felület.|Megjelenik a kérdőív kitöltő felület.|Megfelelően működik, nem találtam hibát.|
|Főoldal - kérdőív létrehozás gomb kezelés|2024.01.22|Az új kérdőívre rákattintva jelenjen meg a kérdőív létrehozó felület.|Megjelenik a kérdőív létrehozó felület.|Megfelelően működik, nem találtam hibát.|
|Főoldal - kérdőív kitöltése|2024.01.22|A kérdőív ne legyen elérhető, ha már egyszer kitöltötte a felhasználó.|A kérdőív kitöltése után nem jelenik meg a főoldalon a kérdőív kitöltésének lehetősége.|Megfelelően működik, nem találtam hibát.|

|Új kérdőív - kérdőív hozzáadás gomb|2024.01.22|A gombra rákattintva hozza létre a kérdőívet.|Létrehozza a kérdőívet.|Megfelelően működik, nem találtam hibát.|
|Új kérdőív - kérdőív hozzáadás a főoldalhoz|2024.01.22|A létrehozott kérdőív megjelenik a felületen.|Létrehozza a kérdőívet.|Megfelelően működik, nem találtam hibát.|
|Új kérdőív - kérdőív hibakezelés|2024.01.22|Ellenőrizze a, hogy van-e nem kitöltött mező, ha van dobjon hibaüzenet.|Az elvárásoknak megfelelően működik, hibaüzenet dob|Megfelelően működik, nem találtam hibát.|

|Statisztika - gomb kezelés|2024.01.22|A gombra rákattintva jelenítse meg a statisztika oldalt.|Megjelenik a statisztika oldal.|Megfelelően működik, nem találtam hibát.|
|Statisztika - statisztika oldal megjelenítés|2024.01.22|A statisztika oldalon a következők jelenjenek meg: a felhasználó által kitöltött kérdőívek szám, kitöltött kérdőívek, kitöltött kérdőívek témái.|A statisztika oldalon a felsoroltak közül mind megjelenik.|Megfelelően működik, nem találtam hibát.|
|Statisztika - kitöltött kérdőívek számolása|2024.01.22|A program számolja meg az összes kitöltött kérdőívet.|A statisztika oldalon megjelenik a kitöltött kérdőívek száma.|Megfelelően működik, nem találtam hibát.|
|Statisztika - kitöltött kérdőívek gomb|2024.01.22|A kitöltött kérdőívekre rákattintva jelenjen meg a kitöltött kérdőív.|A kitöltött kérdőív megjelenik a címmel, az összes kérdéssel és az összes megadott válasszal együtt.|Megfelelően működik, nem találtam hibát.|



A Végleges teszt lezajlott és minden funkció rendesen működik, esztétikailag is megfelelő a program.

Átadásra készen áll a megrendelőnek.

Tesztelést végezte és írta:

Befejezve: 2022.xx.xx.
