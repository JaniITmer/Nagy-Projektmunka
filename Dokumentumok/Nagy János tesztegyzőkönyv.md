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
|bejelentkezett felhasználóként a főldal megtekintése| 2023.12.12. | Az oldalon megjelennek az elérhető kérdőív témák bejelentkezett felhasználóként |Az oldalon megjelennek az elérhető kérdőív témák | Nem találtam hibát. |
|Bejelentkezéskor üres email és jelszó mező megadása | 2023.12.12. | Minden mezőt ki kell töltenie hibaüzenet megjelenítése.  | Hibás email vagy jelszó üzenet jelenik meg  | Nem megfelelő a hibára figyelmeztető üzenet |




A végleges tesztelés során az összes fent felsorolt vizsgálati elem újra ellenőrzésre kerül. Ezzel együtt az új funkciók is tesztelésre kerültek.

## Végleges teszt
| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| ... | 2022.xx.xx. | ... | ... | ... |

A Végleges teszt lezajlott és minden funkció rendesen működik, esztétikailag is megfelelő a program.

Átadásra készen áll a megrendelőnek.

Tesztelést végezte és írta: Nagy János

Befejezve: 2023.12.xx.
