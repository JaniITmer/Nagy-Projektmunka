# Tesztjegyzőkönyv

Teszteléseket végezte: Buru Ádám

Operációs rendszer: Windows 10

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :-------: | ------------------- | ------- | -------- | ----- |
| Főoldal navigáció az oldalak között | 2023.12.12 | A navigációs sávon elhelyezett gombok segítségével navigálhatunk a különböző oldalak, felületek között | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció gomb űrlap kitöltése nélkül | 2023.12.12 | Az oldal tájékoztatja a felhasználót, nem engedi regisztrálni | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció már létező email címmel | 2023.12.12 | Az oldal tájékoztatja a felhasználót, nem engedi regisztrálni | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció nem megfelelő jelszó megadásával | 2023.12.12 | Az oldal tájékoztatja a felhasználót, nem engedi regisztrálni | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció jelszóellenőrzés | 2023.12.12 | Amikor a felhasználó elkezdi begépelni a jelszavát, az oldal visszajelzést ad, hogy annak még milyen kritériumot kell teljesítenie | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció megfelelő adatokkal | 2023.12.12 | A felhasználó adatai bekerülnek az adatbázisba, majd az oldal a bejelentkező felületre navigálja | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkezés gomb használata adatok megadása nélkül | 2023.12.12 | Az oldal tájékoztatja a felhasználót, nem engedi bejelentkezni | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkezés gomb használata helytelen adatok megadásával | 2023.12.12 | Az oldal tájékoztatja a felhasználót, nem engedi bejelentkezni | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkezés gomb használata helyes adatok megadásával | 2023.12.12 | A főoldalra navigálja a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Főoldalon kérdőívek megjelenítése | 2023.12.12 | Bejelentkezett felhasználó esetén a kérdőívek megjelennek a főoldalon | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Profil felület | 2023.12.12 | Bejelentkezett felhasználó profilképet tölthet fel, láthatja az email címét | Profilkép feltöltésnél, ha frissítjük az oldalt, a kép nem marad meg, az email cím megjelenik | Profilkép tárolása nincs kezelve |
| Statisztika felület | 2023.12.12 | A felhasználó által kitöltött kérdőívek megjelennek | Nem jelennek meg a kitöltött kérdőívek | Nincs megvalósítva a funkció |
| Új kérdőív létrehozása | 2023.12.12 | Az új kérdőív bekerül az adatbázisba | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív kitöltése | 2023.12.12 | A kérdőívet kitöltjük, majd beküldjük | Nem tudjuk kiválasztani a válaszokat, nem kerül az adatbázisba a kérdőív | Nincs megvalósítva a funkció |
| Kijelentkezés gomb | 2023.12.12 | Az oldal kijelentkezteti a felhasználót, visszakerülünk a főoldalra | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |

Az Alfa tesztelés során a vizsgált elemek között volt ami nem megfelelően működött, ez a későbbiek során javításra szorul.

Következő tesztelésnél a többi funkció kerül vizsgálatra, illetve elemzésre.

## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :-------: | ------------------- | ------- | -------- | ----- |
| Főoldal navigáció az oldalak között | 2023.12.13 | A navigációs sávon elhelyezett gombok segítségével navigálhatunk a különböző oldalak, felületek között | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztrációs felület hibakezelés | 2023.12.13 | Helytelen adatok megadása esetén a felhasználó tájékoztatása, nem regisztráljuk a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció megfelelő adatokkal | 2023.12.13 | A felhasználó adatai bekerülnek az adatbázisba, majd az oldal a bejelentkező felületre navigálja | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkező felület hibakezelés | 2023.12.13 | Helytelen adatok megadása esetén a felhasználó tájékoztatása, nem jelentkeztetjük be a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkezés helyes adatok megadásával | 2023.12.13 | Bejelentkezés, a főoldalra navigálja a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Profil menüpont | 2023.12.13 | A profil menüpontot csak bejelentkezett felhasználók látják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Statisztikák menüpont | 2023.12.13 | A statisztikák menüpontot csak bejelentkezett felhasználók látják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív megjelenítés | 2023.12.13 | A kérdőíveket csak bejelentkezett felhasználók látják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Új kérdőív létrehozása | 2023.12.13 | Az új kérdőív bekerül az adatbázisba | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív kitöltése | 2023.12.13 | A kérdőívet kitöltjük, majd beküldjük | Nem tudjuk kiválasztani a válaszokat, nem kerül az adatbázisba a kérdőív | Nincs megvalósítva a funkció |
| Kijelentkezés gomb | 2023.12.13 | Az oldal kijelentkezteti a felhasználót, visszakerülünk a főoldalra | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |

A Béta teszt sikeresen zajlott.
A Béta teszt során akadtak hibák, mely(ek) javításra szorulnak.

A végleges tesztelés során az összes fent felsorolt vizsgálati elem újra ellenőrzésre kerül. Ezzel együtt az új funkciók is tesztelésre kerültek.

## Végleges teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :-------: | ------------------- | ------- | -------- | ----- |
| Főoldal navigáció az oldalak között | 2024.01.22. | A navigációs sávon elhelyezett gombok segítségével navigálhatunk a különböző oldalak, felületek között | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztrációs felület hibakezelés | 2024.01.22. | Helytelen adatok megadása esetén a felhasználó tájékoztatása, nem regisztráljuk a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Regisztráció megfelelő adatokkal | 2024.01.22. | A felhasználó adatai bekerülnek az adatbázisba, majd az oldal a bejelentkező felületre navigálja | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkező felület hibakezelés | 2024.01.22. | Helytelen adatok megadása esetén a felhasználó tájékoztatása, nem jelentkeztetjük be a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Bejelentkezés helyes adatok megadásával | 2024.01.22. | Bejelentkezés, a főoldalra navigálja a felhasználót | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Profil menüpont | 2024.01.22. | A profil menüpontot csak bejelentkezett felhasználók látják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Profil oldal | 2024.01.22. | A profil oldalon megjelenik a bejelentkezett felhasználó felhasználóneve, email címe | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Statisztikák menüpont | 2024.01.22. | A statisztikák menüpontot csak bejelentkezett felhasználók látják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív megjelenítés | 2024.01.22. | A kérdőíveket csak bejelentkezett felhasználók látják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív megjelenítés témák szerint | 2024.01.22. | A kérdőívek témák szerint csoportosítva jelennek meg | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Új kérdőív létrehozása | 2024.01.22. | Az új kérdőív bekerül az adatbázisba | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Új kérdőív létrehozása üres mezőkkel | 2024.01.22. | Az oldal csak akkor hozza létre az új kérdőívet, ha előtte minden mezőt kitöltöttünk | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív kitöltése | 2024.01.22. | A kérdőívet kitöltjük, beküldjük, az bekerül az adatbázisba | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív kitöltésnél hiányos válaszadás | 2024.01.22. | Ha nem válaszolunk minden kérdésre, az oldal tájékoztat, nem küldi be a kérdőívet | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kitöltött kérdőív megjelenítése | 2024.01.22. | A kitöltött kérdőív megjelenik a statisztika oldalon | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Felhasználó kitöltött kérdőíveinek száma | 2024.01.22. | A statisztika oldalon megjelenik, hogy a bejelentkezett felhasználó eddig hány kérdőívet töltött ki | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kérdőív kitöltések száma | 2024.01.22. | A statisztika oldalon megjelenik, hogy az adott kérdőívet, hány felhasználó töltötte ki eddig | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Saját válaszok megtekintése | 2024.01.22. | A felhasználó megtekintheti az általa kitöltött kérdőívekre adott válaszait | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
| Kijelentkezés gomb | 2024.01.22. | Az oldal kijelentkezteti a felhasználót, visszakerülünk a főoldalra | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |

A Végleges teszt lezajlott és minden funkció rendesen működik, esztétikailag is megfelelő a program.

Átadásra készen áll a megrendelőnek.

Tesztelést végezte és írta: Buru Ádám

Befejezve: 2024.01.22.
