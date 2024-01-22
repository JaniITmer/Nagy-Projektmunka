# Tesztjegyzőkönyv

Teszteléseket végezte: Nagy János

Operációs rendszer: Windows 11

Ebben a dokumentumban lesz felsorolva az elvégzett tesztek elvárásai és eredményei, illetve időpontjai (Alfa, Béta és Végleges verzió).

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
|Mezők üresen hagyása a regisztrációkor| 2023.12.10. | Regisztráció művelet nem hajtódik végre. Üzenetben jelezni a felhasználónak, hogy  a mezők üresek | Az  oldal jelezi a felhasználónak, hogy ma kitöltendő mezők üresek | Nem találtam hibát.|
|Helytelen email cím megadása regisztrációkor| 2023.12.10. | Regisztráció művelet nem hajtódik végre. Üzenetben jelezni a felhasználónak, hogy hibás az email cím. | Az oldal jelezi a felhasználónak, hogy hibás az email cím. | Nem találtam hibát.|
|Rövid jelszó megadása | 2023.12.10. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy rövid a jelszó 8 karakteresnek kell lennie legalább.| Az oldal jelezi a felhasználónak, hogy rövid a jelszó.  | Nem találtam hibát.|
|Csak betűk megadása jelszóként regisztrációkor | 2023.12.10. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a jelszónak számot és speciális karaktert is kell tartalmaznia| Az oldal jelzi, hogy a jelszónak számot és speciális karaktert is kell tartalmaznia|Nem találtam hibát. |
|Csak speciális karakterek megadása jelszóként regisztrációkor | 2023.12.10. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a jelszónak számot és Nagybetűt is kell tartalmaznia| Az oldal jelez a hiányzó speciális karakterrel kapcsolatban | Nem találtam hibát.|
|Jelszó megerősítése más szöveggel regisztrációkor| 2023.12.10. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a két jelszónak azonosnak kell lennie| Nem találtam problémát. | Nem találtam hibát. |
|Navigálás az oldalak között| 2023.12.11. | Az oldal tetején található navigációs sávon elhelyezett gombokra kattintva átléphetünk egy másik oldalra| A funkció az elvárásnak megfelelően működik  | Nem találtam hibát. |
|Új kérdőívnek a létrehozása| 2023.12.11. | Az elkészített kérdőív bekerül az adatbázisba| A funkció az elvárásnak megfelelően működik  | Nem találtam hibát. |
|Egy adott kérdőív kitöltése | 2023.12.11. | A kérdőívben kiválasztjuk az adott kérdéshez hozzátartozó válaszokat | A válaszok megjelennek, de nem lehet kiválasztani őket | Nincs megvalósítva a funkció |
|Kitöltött Kérdőív beküldése | 2023.12.11 | A kérdőívet kitöltjük, majd beküldés után bekerül az adatbázisba | A beküldés során hiba lép fel, nem töltődik fel az adatbázisba | Adatbáziskezelés hiba |
|Kijelentkezés gomb használata| 2023.12.11| Az oldal kijelentkezteti a felhasználót, majd visszakerül a főoldalra | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |





Az Alfa tesztelés során a vizsgált elemek között volt ami nem megfelelően működött, ez a későbbiek során javításra szorul.

Következő tesztelésnél a többi funkció kerül vizsgálatra illetve elemzésre.
## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
|Rossz email cím megadása bejelentkezéskor| 2023.12.12. | Bejelentkezés művelet nem hajtódik végre. | Az oldal jelzi hogy hibás az email vagy a jelszó |Nem találtam hibát. |
|Rossz jelszó megadása bejelentkezéskor| 2023.12.12. | Bejelentkezés művelet nem hajtódik végre. | Az oldal jelzi hogy hibás az email vagy a jelszó | Nem találtam hibát. |
|Saját profil megjelenítése ha bejelentkezett a felhasználó | 2023.12.12. | Megjelennik a saját profil fül , a felhasználók adatai is megjelennek a profil oldalon belül| Elérhető a profil fül |Nem találtam hibát.|
|Saját profil elrejtése ha nincs bejelentkezve a felhasználó| 2023.12.12. | Nem jelenik meg a  Saját profil fül |  Nem jelenik meg a  Saját profil fül  | Nem találtam hibát. |
|Nem regisztrált felhasználóként a főldal megtekintése| 2023.12.12. | Az oldal tudatosítja a felhasználóval hogy a kérdőívek kitöltéséhez bejelentkezés szükséges | Az oldal közli, hogy a Kérdőív megtekintéséhez regisztráció szükséges | Nem találtam hibát. |
|Bejelentkezett felhasználóként a főldal megtekintése| 2023.12.12. | Az oldalon megjelennek az elérhető kérdőív témák bejelentkezett felhasználóként |Az oldalon megjelennek az elérhető kérdőív témák | Nem találtam hibát. |
|Bejelentkezéskor üres email és jelszó mező megadása | 2023.12.12. | Minden mezőt ki kell töltenie hibaüzenet megjelenítése.  | Hibás email vagy jelszó üzenet jelenik meg  | Nem megfelelő a hibára figyelmeztető üzenet |
|Egy adott kérdőív kitöltése | 2023.12.12. | A kérdőívben kiválasztjuk az adott kérdéshez hozzátartozó válaszokat | A válaszok megjelennek, de nem lehet kiválasztani őket | Nincs megvalósítva a funkció |
|Egy adott kérdőív kitöltése | 2023.12.12. | A kérdőívben kiválasztjuk az adott kérdéshez hozzátartozó válaszokat | A válaszok megjelennek, de nem lehet kiválasztani őket | Nincs megvalósítva a funkció |
|Új kérdőívnek a létrehozása| 2023.12.12. | Az elkészített kérdőív bekerül az adatbázisba| A funkció az elvárásnak megfelelően működik  | Nem találtam hibát. |
|Kijelentkezés gomb használata| 2023.12.12| Az oldal kijelentkezteti a felhasználót, majd visszakerül a főoldalra | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |
|Statisztika menüpont| 2023.12.12| A statisztikák menüpontot csak bejelentkezett felhasználók láthatják | A funkció az elvárásnak megfelelően működik | Nem találtam hibát |


A végleges tesztelés során az összes fent felsorolt vizsgálati elem újra ellenőrzésre kerül. Ezzel együtt az új funkciók is tesztelésre kerültek.

## Végleges teszt


| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
|Főoldal megjelenítése nem regisztrált felhasználóként| 2024.01.22. | A weboldal kezdőlapja a kitölthető  kérdőívek nélkül jelenik meg.| A weboldal kezdőlapja a kitölthető  kérdőívek nélkül jelenik meg.| Nem találtam hibát.|
|Főoldal megjelenítése bejelentkezett felhasználóként| 2024.01.22. | A weboldal kezdőlapja a kitölthető  kérdőívekkel együtt jelenik meg.|A weboldal kezdőlapja a kitölthető  kérdőívekkel együtt jelenik meg.| Nem találtam hibát.|
|Mezők üresen hagyása a regisztrációkor| 2024.01.22. | Regisztráció művelet nem hajtódik végre. Üzenetben jelezni a felhasználónak, hogy  a mezők üresek | Az  oldal jelezi a regisztráló felhasználónak, hogy a kitöltendő mezők üresek. | Nem találtam hibát.|
|Helytelen email cím megadása regisztrációkor|  2024.01.22. | Regisztráció művelet nem hajtódik végre. Üzenetben jelezni a felhasználónak, hogy hibás az email cím. | Az oldal jelezi a felhasználónak, hogy hibás az email cím. | Nem találtam hibát.|
|Korábbi regisztráláskor felhasznált email újbóli használata|  2024.01.22. | Regisztráció művelet nem hajtódik végre. Üzenetben jelezni a felhasználónak, hogy az email cím már foglalt! | Az oldal jelezi a felhasználónak, hogy az email cím már foglalt! | Nem találtam hibát.|
|Rövid jelszó megadása |  2024.01.22. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy rövid a jelszó 8 karakteresnek kell lennie legalább.| Az oldal jelezi a felhasználónak, hogy rövid a jelszó.  | Nem találtam hibát.|
|Csak betűk megadása jelszóként regisztrációkor | 2024.01.22.| Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a jelszónak számot és speciális karaktert is kell tartalmaznia.| Az oldal jelzi, hogy a jelszónak számot és speciális karaktert is kell tartalmaznia|Nem találtam hibát. |
|Csak speciális karakterek megadása jelszóként regisztrációkor | 2024.01.22.| Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a jelszónak számot és Nagybetűt is kell tartalmaznia .| Az oldal jelez a hiányzó speciális karakterrel kapcsolatban | Nem találtam hibát.|
|Csak alap karakterek megadása jelszóként regisztrációkor | 2024.01.22. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a jelszónak számot, speciális karaktert és Nagybetűt is kell tartalmaznia| Az oldal jelez a hiányzó szám és a speciális karakterrel kapcsolatban | Nem találtam hibát.|
|Jelszó megerősítése más szöveggel regisztrációkor| 2024.01.22. | Regisztráció művelet nem hajtódik végre.  Jelez a felhasználónak az oldal, hogy a két jelszónak azonosnak kell lennie| Nem találtam problémát. | Nem találtam hibát. |
|Helyes adatokkal való regisztráció | 2024.01.22. | A regisztráció sikeresen végrehajtódik| A regisztráció sikeresen végrehajtódik.| Nem találtam hibát.|
|Navigálás az oldalak között| 2024.01.22.| Az oldal tetején található navigációs sávon elhelyezett gombokra kattintva átléphetünk egy másik oldalra| A funkció az elvárásnak megfelelően működik  | Nem találtam hibát. |
|Bejelentkezéskor üres email és jelszó mező megadása |2024.01.22. | Minden mezőt ki kell töltenie hibaüzenet megjelenítése.  |  Minden mezőt ki kell töltenie hibaüzenet megjelenítése.  | Nem találtam hibát.  |
|Bejelentkezéskor hibás email és jelszó mező megadása |2024.01.22.|  Hibás email vagy jelszó üzenet jelenik meg.   | Hibás email vagy jelszó üzenet jelenik meg.  |  Nem találtam hibát. |
|Bejelentkezéskor regisztrált felhasználó adatainak a megadása|2024.01.22.| Sikeres bejelentkezés az oldalra. | Sikeres bejelentkezés az oldalra.  |  Nem találtam hibát. |
|Egy adott kérdőív kitöltése | 2024.01.22. | A kérdőívben kiválasztjuk az adott kérdéshez hozzátartozó  számunkra megfelelő válaszokat | A válaszok megjelennek és lehet közülük választani| Nem találtam hibát.|
|Kitöltött Kérdőív beküldése | 2024.01.22.| A kérdőívet kitöltjük, majd beküldés után bekerül az adatbázisba | A beküldés sikeresen végbemegy, az adatbázisban megjelennek az adatok| Nem találtam hibát. |
|Új kérdőívnek a létrehozása| 2024.01.22.| Az elkészített kérdőív bekerül az adatbázisba| Az elkészített kérdőív bekerül az adatbázisba.  | Nem találtam hibát. |
|Új kérdőívnek a létrehozása hiányzó témával| 2024.01.22.| A hiányos kérdőív nem kerül be az adatbázisba, és az oldal jelzi a felhasználónak, hogy mindent ki kell tölteni.| A hiányos kérdőív nem kerül be az adatbázisba, és az oldal jelzi a felhasználónak, hogy mindent ki kell tölteni. | Nem találtam hibát. |
|Új kérdőívnek a létrehozása hiányos válasz lehetőségekkel| 2024.01.22.| A hiányos kérdőív nem kerül be az adatbázisba, és az oldal jelzi a felhasználónak, hogy mindent ki kell tölteni.| A hiányos kérdőív nem kerül be az adatbázisba, és az oldal jelzi a felhasználónak, hogy mindent ki kell tölteni. | Nem találtam hibát. |
|Statisztika menüpont megjelenítése| 2024.01.22.| A statisztikák menüpontot csak bejelentkezett felhasználók láthatják | A statisztikák menüpont csak bejelentkezett felhasználók számára jelenik meg.| Nem találtam hibát |
|Statisztika menüpont használata| 2024.01.22. | A bejelentkezett felhasználó kitöltött kérdőíveinek a száma jelenik meg.| A bejelentkezett felhasználó kitöltött kérdőíveinek a száma jelenik meg.| Nem találtam hibát |
|Profil oldal| 2024.01.22. | A profil oldalon megjelenik a bejlentkezett felhasznalo felhasználó neve és jelszava. |A profil oldalon megjelenik a bejlentkezett felhasznalo felhasználó neve és jelszava.| Nem találtam hibát |
|Kijelentkezés gomb használata| 2024.01.22. | Az oldal kijelentkezteti a felhasználót, majd visszakerül a főoldalra | Az oldal kijelentkezteti a felhasználót, majd visszakerül a főoldalra. | Nem találtam hibát |





A Végleges teszt lezajlott és minden funkció rendesen működik, esztétikailag is megfelelő a program.

Átadásra készen áll a megrendelőnek.

Tesztelést végezte és írta: Nagy János

Befejezve: 2023.01.22.
